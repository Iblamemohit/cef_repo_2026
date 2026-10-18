import React, { useEffect, useRef } from "react";

export default function AsciiStructureCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let angleX = 0;
    let angleY = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    // Geodesic 3D Nodes (Structural Space Truss)
    const nodes = [];
    const numPoints = 64;
    const radius = 130;

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      nodes.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        char: ["+", "·", "×", "#", "○", "▪"][i % 6],
      });
    }

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      angleX += 0.006;
      angleY += 0.008;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projected = nodes.map((node) => {
        // Rotate around Y
        let x1 = node.x * cosY + node.z * sinY;
        let z1 = -node.x * sinY + node.z * cosY;

        // Rotate around X
        let y2 = node.y * cosX - z1 * sinX;
        let z2 = node.y * sinX + z1 * cosX;

        // Perspective projection
        const fov = 340;
        const scale = fov / (fov + z2 + 180);
        const x2D = width / 2 + x1 * scale;
        const y2D = height / 2 + y2 * scale;

        return { x: x2D, y: y2D, z: z2, scale, char: node.char };
      });

      // Draw Structural Members (Lines between nearby nodes)
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 46) {
            const alpha = Math.max(0.04, 0.35 - dist / 110);
            ctx.strokeStyle = `rgba(13, 148, 136, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw ASCII Nodes
      ctx.font = "11px 'Geist Mono', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      projected.sort((a, b) => b.z - a.z);

      projected.forEach((p) => {
        const alpha = Math.min(1, Math.max(0.2, (p.z + 140) / 280));
        ctx.fillStyle = `rgba(15, 23, 42, ${alpha})`;
        if (document.documentElement.classList.contains("dark")) {
          ctx.fillStyle = `rgba(244, 243, 238, ${alpha})`;
        }
        ctx.fillText(p.char, p.x, p.y);
      });

      // Technical Crosshairs
      ctx.strokeStyle = "rgba(100, 99, 94, 0.25)";
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 160, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] flex items-center justify-center overflow-hidden border border-border bg-card rounded-2xl shadow-sm">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0 cursor-crosshair"
      />

      {/* Technical Coordinate Stamps */}
      <div className="absolute top-4 left-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted pointer-events-none">
        [ SYSTEM // STR-TRUSS-4D ]
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-teal pointer-events-none">
        LIVE MESH // 60 FPS
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-muted pointer-events-none">
        LAT 28.5450° N · LONG 77.1926° E
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-muted pointer-events-none">
        IIT DELHI // BLK-IV
      </div>
    </div>
  );
}
