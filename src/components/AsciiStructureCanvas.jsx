import React, { useEffect, useRef } from "react";

/**
 * Burj Khalifa 3D Structural Skeleton Animation (Pure View)
 * - Y-shaped buttressed core with 26 spiraling setbacks
 * - Steel spire reaching 828.0m pinnacle
 * - Progressive layer-by-layer slipform climbing animation at 60 FPS
 * - 360° interactive mouse & touch drag turntable rotation
 * - Zero borders, transparent background, zero text clutter
 */

export default function AsciiStructureCanvas() {
  const canvasRef = useRef(null);

  // Turntable and rotation state
  const dragRef = useRef({
    isDragging: false,
    lastX: 0,
    lastY: 0,
    rotX: 0.12, // Slight upward perspective looking at the skyscraper
    rotY: 0.45, // Initial angle showing the 3 wings
  });

  const animStateRef = useRef({
    progress: 0,
    speed: 0.0016, // Completes construction in ~10 seconds at 60 FPS
    holdFrames: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    // ── 1. Generate Burj Khalifa Structural Geometry ──────────────────────
    const TOTAL_TIERS = 28;
    const BASE_Y = 135;
    const TOP_Y = -185;
    const SPIRE_TIP_Y = -238;

    const tiers = [];

    for (let k = 0; k < TOTAL_TIERS; k++) {
      const tNorm = k / (TOTAL_TIERS - 1);
      const y = BASE_Y - tNorm * (BASE_Y - TOP_Y);

      // Central Hexagonal Core radius tapers gradually
      const rCore = Math.max(3.2, 11 - k * 0.28);
      const corePoints = [];
      for (let i = 0; i < 6; i++) {
        const ang = (i * Math.PI) / 3;
        corePoints.push({
          x: rCore * Math.cos(ang),
          y,
          z: rCore * Math.sin(ang),
        });
      }

      // 3 Wings oriented at 0°, 120°, 240°
      const wings = [];
      const wingAngles = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];

      if (k < 22) {
        // Tiers 0 to 21: Y-shaped footprint with spiraling setbacks
        for (let w = 0; w < 3; w++) {
          const ang = wingAngles[w];
          const dirX = Math.cos(ang);
          const dirZ = Math.sin(ang);
          const perpX = -Math.sin(ang);
          const perpZ = Math.cos(ang);

          // Calculate spiraling setbacks: each wing steps in at staggered tier intervals
          const setbacksCount = Math.max(0, Math.floor((k - w) / 3));
          const wLength = Math.max(0, 56 - setbacksCount * 6.5);
          const wWidth = Math.max(3, 7.5 - k * 0.18);

          if (wLength > rCore + 2) {
            const tip = {
              x: wLength * dirX,
              y,
              z: wLength * dirZ,
            };
            const left = {
              x: (wLength - 2) * dirX + wWidth * perpX,
              y,
              z: (wLength - 2) * dirZ + wWidth * perpZ,
            };
            const right = {
              x: (wLength - 2) * dirX - wWidth * perpX,
              y,
              z: (wLength - 2) * dirZ - wWidth * perpZ,
            };
            const baseLeft = {
              x: rCore * dirX + wWidth * perpX,
              y,
              z: rCore * dirZ + wWidth * perpZ,
            };
            const baseRight = {
              x: rCore * dirX - wWidth * perpX,
              y,
              z: rCore * dirZ - wWidth * perpZ,
            };

            wings.push({ tip, left, right, baseLeft, baseRight, wLength, active: true });
          } else {
            wings.push({ active: false });
          }
        }
      } else {
        // Upper mechanical tower & spire base
        for (let w = 0; w < 3; w++) {
          wings.push({ active: false });
        }
      }

      // Spire pinnacle levels
      let spirePoint = null;
      let spireRing = null;
      if (k >= 22) {
        const spireRatio = (k - 22) / 5;
        const sY = TOP_Y - spireRatio * (TOP_Y - SPIRE_TIP_Y);
        const sRadius = Math.max(0.8, 4.2 * (1 - spireRatio));

        spireRing = [];
        for (let i = 0; i < 4; i++) {
          const sAng = (i * Math.PI) / 2;
          spireRing.push({
            x: sRadius * Math.cos(sAng),
            y: sY,
            z: sRadius * Math.sin(sAng),
          });
        }
        if (k === TOTAL_TIERS - 1) {
          spirePoint = { x: 0, y: SPIRE_TIP_Y, z: 0 };
        }
      }

      tiers.push({
        tierIndex: k,
        y,
        corePoints,
        wings,
        spireRing,
        spirePoint,
      });
    }

    // ── 2. Render Loop (60 FPS) ───────────────────────────────────────────
    let beaconFlash = 0;

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Animation progress updates
      if (animStateRef.current.progress < 1) {
        animStateRef.current.progress = Math.min(1, animStateRef.current.progress + animStateRef.current.speed);
      } else {
        animStateRef.current.holdFrames++;
        if (animStateRef.current.holdFrames > 180) { // Hold for 3s after completion
          animStateRef.current.progress = 0;
          animStateRef.current.holdFrames = 0;
        }
      }

      const progress = animStateRef.current.progress;
      const isTopOut = progress >= 0.995;

      // Turntable auto-orbit when not dragging
      if (!dragRef.current.isDragging) {
        dragRef.current.rotY += 0.007;
      }

      const rotX = dragRef.current.rotX;
      const rotY = dragRef.current.rotY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const fov = 400;
      const originX = width / 2;
      const originY = height / 2 + 25;

      // 3D perspective projection function
      const project = (p) => {
        // Rotate around Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        const scale = fov / (fov + z2 + 260);
        return {
          x: originX + x1 * scale,
          y: originY + y2 * scale,
          z: z2,
          scale,
        };
      };

      const isDark = document.documentElement.classList.contains("dark");

      // ── Foundation Pile Raft Grid ────────────────────────────────────
      const raftR = 64;
      const groundY = BASE_Y + 6;
      ctx.lineWidth = 1;
      ctx.strokeStyle = isDark ? "rgba(229, 72, 72, 0.22)" : "rgba(140, 21, 21, 0.18)";

      // Draw foundation radial anchor arms
      for (let w = 0; w < 3; w++) {
        const ang = (w * 2 * Math.PI) / 3;
        const p1 = project({ x: 0, y: groundY, z: 0 });
        const p2 = project({ x: raftR * Math.cos(ang), y: groundY, z: raftR * Math.sin(ang) });
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      // ── Draw Tiers & Structural Members ──────────────────────────────
      const activeTierIndex = Math.min(TOTAL_TIERS - 1, Math.floor(progress * TOTAL_TIERS));

      tiers.forEach((tier, k) => {
        const isBuilt = k <= activeTierIndex;
        const isCurrentBuilding = k === activeTierIndex;

        // Project hexagonal core
        const projCore = tier.corePoints.map(project);

        // Styling based on construction progress
        let strokeAlpha;
        let strokeColor;
        let isBlueprintGhost = false;

        if (isBuilt) {
          const depthAlpha = Math.max(0.2, (projCore[0].z + 160) / 320);
          strokeAlpha = depthAlpha;
          strokeColor = isDark
            ? `rgba(229, 72, 72, ${strokeAlpha})`
            : `rgba(140, 21, 21, ${strokeAlpha})`;
        } else {
          // Future tiers rendered as subtle architectural blueprint wireframe
          isBlueprintGhost = true;
          strokeAlpha = isDark ? 0.08 : 0.06;
          strokeColor = isDark
            ? `rgba(255, 255, 255, ${strokeAlpha})`
            : `rgba(28, 26, 23, ${strokeAlpha})`;
        }

        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = isCurrentBuilding ? 1.8 : isBlueprintGhost ? 0.6 : 0.95;

        // Draw Central Core Hexagon
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const p = projCore[i];
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.closePath();
        ctx.stroke();

        // Draw Wings Perimeter & Corridors
        tier.wings.forEach((wing) => {
          if (!wing.active) return;
          const pTip = project(wing.tip);
          const pL = project(wing.left);
          const pR = project(wing.right);
          const pBL = project(wing.baseLeft);
          const pBR = project(wing.baseRight);

          ctx.beginPath();
          ctx.moveTo(pBL.x, pBL.y);
          ctx.lineTo(pL.x, pL.y);
          ctx.lineTo(pTip.x, pTip.y);
          ctx.lineTo(pR.x, pR.y);
          ctx.lineTo(pBR.x, pBR.y);
          ctx.stroke();

          // Floor diaphragm internal brace
          if (k % 3 === 0 && !isBlueprintGhost) {
            ctx.beginPath();
            ctx.moveTo(pL.x, pL.y);
            ctx.lineTo(pR.x, pR.y);
            ctx.stroke();
          }
        });

        // Spire Ring
        if (tier.spireRing) {
          const pSpireRing = tier.spireRing.map(project);
          ctx.beginPath();
          pSpireRing.forEach((p, idx) => {
            if (idx === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          });
          ctx.closePath();
          ctx.stroke();
        }

        // Draw Vertical Structural Columns to previous tier
        if (k > 0 && (isBuilt || isBlueprintGhost)) {
          const prevTier = tiers[k - 1];
          const prevCore = prevTier.corePoints.map(project);

          // Hexagonal core shear wall vertical columns
          ctx.lineWidth = isBlueprintGhost ? 0.45 : 0.9;
          for (let i = 0; i < 6; i++) {
            ctx.beginPath();
            ctx.moveTo(projCore[i].x, projCore[i].y);
            ctx.lineTo(prevCore[i].x, prevCore[i].y);
            ctx.stroke();
          }

          // Outrigger vertical wing columns
          tier.wings.forEach((wing, w) => {
            const prevWing = prevTier.wings[w];
            if (wing.active && prevWing && prevWing.active) {
              const curTip = project(wing.tip);
              const prevTip = project(prevWing.tip);
              ctx.beginPath();
              ctx.moveTo(curTip.x, curTip.y);
              ctx.lineTo(prevTip.x, prevTip.y);
              ctx.stroke();
            }
          });

          // Mechanical Outrigger Cross-Bracing on tiers 4, 8, 12, 16, 20
          if (k % 4 === 0 && isBuilt) {
            ctx.strokeStyle = isDark ? "rgba(39, 153, 137, 0.45)" : "rgba(23, 94, 84, 0.4)";
            for (let i = 0; i < 6; i++) {
              const nextI = (i + 1) % 6;
              ctx.beginPath();
              ctx.moveTo(projCore[i].x, projCore[i].y);
              ctx.lineTo(prevCore[nextI].x, prevCore[nextI].y);
              ctx.stroke();
            }
          }
        }

        // ── Active Slip-Form Climbing Laser Ring ─────────────────────────
        if (isCurrentBuilding && !isTopOut) {
          const laserCenter = project({ x: 0, y: tier.y, z: 0 });
          const laserR = 52 * Math.max(0.4, (1 - tier.tierIndex / 30));

          // Pulsing laser plane
          ctx.strokeStyle = isDark ? "rgba(229, 72, 72, 0.9)" : "rgba(140, 21, 21, 0.9)";
          ctx.lineWidth = 2.2;
          ctx.beginPath();
          ctx.arc(laserCenter.x, laserCenter.y, laserR, 0, Math.PI * 2);
          ctx.stroke();

          // Scanning construction crosshairs
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(laserCenter.x - laserR - 18, laserCenter.y);
          ctx.lineTo(laserCenter.x + laserR + 18, laserCenter.y);
          ctx.stroke();
          ctx.setLineDash([]);

          // Beam Placement Sparks
          const sparkAngle = Date.now() * 0.005;
          const sparkX = laserCenter.x + Math.cos(sparkAngle) * (laserR * 0.7);
          const sparkY = laserCenter.y + Math.sin(sparkAngle) * (laserR * 0.7);

          ctx.fillStyle = isDark ? "#ffffff" : "#8c1515";
          ctx.beginPath();
          ctx.arc(sparkX, sparkY, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // ── Pinnacle Spire Needle & Flashing Aircraft Warning Beacon ──────
      if (isTopOut) {
        const topTier = tiers[TOTAL_TIERS - 1];
        if (topTier.spirePoint) {
          const pTip = project(topTier.spirePoint);
          const pBase = project({ x: 0, y: TOP_Y, z: 0 });

          // Structural steel mast
          ctx.strokeStyle = isDark ? "#e54848" : "#8c1515";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(pBase.x, pBase.y);
          ctx.lineTo(pTip.x, pTip.y);
          ctx.stroke();

          // Flashing beacon light (red/white strobe at 828m summit)
          beaconFlash = (beaconFlash + 1) % 60;
          if (beaconFlash < 30) {
            ctx.fillStyle = isDark ? "#ff4444" : "#e52222";
            ctx.beginPath();
            ctx.arc(pTip.x, pTip.y, 4, 0, Math.PI * 2);
            ctx.fill();

            // Glow halo
            ctx.strokeStyle = isDark ? "rgba(255, 68, 68, 0.4)" : "rgba(229, 34, 34, 0.4)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(pTip.x, pTip.y, 10, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Mouse & Touch drag handling for 360° interactive inspection
  const handlePointerDown = (e) => {
    dragRef.current.isDragging = true;
    dragRef.current.lastX = e.clientX || (e.touches && e.touches[0].clientX);
    dragRef.current.lastY = e.clientY || (e.touches && e.touches[0].clientY);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const deltaX = clientX - dragRef.current.lastX;
    const deltaY = clientY - dragRef.current.lastY;

    dragRef.current.rotY += deltaX * 0.009;
    dragRef.current.rotX = Math.max(-0.4, Math.min(0.5, dragRef.current.rotX + deltaY * 0.006));

    dragRef.current.lastX = clientX;
    dragRef.current.lastY = clientY;
  };

  const handlePointerUp = () => {
    dragRef.current.isDragging = false;
  };

  return (
    <div
      className="relative w-full h-full min-h-[380px] sm:min-h-[480px] flex items-center justify-center select-none bg-transparent"
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      style={{ cursor: dragRef.current.isDragging ? "grabbing" : "grab" }}
      aria-label="Burj Khalifa 3D Structural Skeleton Animation"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
