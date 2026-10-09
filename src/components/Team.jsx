import React from "react";
import MemberCard from "./MemberCard";
import { TeamData } from "../data/team";

function TeamTier({ title, subtitle, count, children }) {
  return (
    <div className="w-full flex flex-col gap-6 items-center">
      <div className="flex flex-col items-center gap-1">
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08]">
          <span className="w-1.5 h-1.5 rounded-full bg-civil-amber" />
          <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            {title}
          </span>
          {count > 0 && (
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
              ({count})
            </span>
          )}
        </div>
        {subtitle && (
          <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex gap-5 sm:gap-6 justify-center items-stretch flex-wrap max-w-6xl">
        {children}
      </div>
    </div>
  );
}

function Team() {
  const facultyMembers = TeamData.Faculty?.Tier2 || [];
  const coreMembers = TeamData.Core?.Tier1 || [];
  const coordinators = TeamData.Coordinators || [];
  const executives = TeamData.Executives || [];

  return (
    <div className="w-full flex flex-col gap-14">
      {/* 1. Faculty Leadership */}
      {facultyMembers.length > 0 && (
        <TeamTier
          title="Faculty Leadership & Mentorship"
          subtitle="Department heads and academic advisors guiding CEF"
          count={facultyMembers.length}
        >
          {facultyMembers.map((item, key) => (
            <MemberCard
              key={key}
              designation={item.desg}
              name={item.name}
              image={item.img}
              position={item.position}
              linkedIn={item.linkedIn}
            />
          ))}
        </TeamTier>
      )}

      {/* 2. Core Leadership (Gen Sec & Panel) */}
      {coreMembers.length > 0 && (
        <TeamTier
          title="Core Executive Committee"
          subtitle="Leading society initiatives and student representation"
          count={coreMembers.length}
        >
          {coreMembers.map((item, key) => (
            <MemberCard
              key={key}
              designation={item.desg}
              name={item.name}
              image={item.img}
              position={item.position}
              linkedIn={item.linkedIn}
            />
          ))}
        </TeamTier>
      )}

      {/* 3. Coordinators */}
      {coordinators.length > 0 && (
        <TeamTier
          title="Department Coordinators"
          subtitle="Directing operations, technical events, sponsorships, and outreach"
          count={coordinators.length}
        >
          {coordinators.map((item, key) => (
            <MemberCard
              key={key}
              designation={item.desg}
              name={item.name}
              image={item.img}
              position={item.position}
              linkedIn={item.linkedIn}
            />
          ))}
        </TeamTier>
      )}

      {/* 4. Executives */}
      {executives.length > 0 && (
        <TeamTier
          title="Executive Team"
          subtitle="Active driving force executing campus activities and projects"
          count={executives.length}
        >
          {executives.map((item, key) => (
            <MemberCard
              key={key}
              designation={item.desg}
              name={item.name}
              image={item.img}
              position={item.position}
              linkedIn={item.linkedIn}
            />
          ))}
        </TeamTier>
      )}
    </div>
  );
}

export default Team;
