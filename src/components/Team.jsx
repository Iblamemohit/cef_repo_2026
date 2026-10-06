import React from "react";
import MemberCard from "./MemberCard";
import { TeamData } from "../data/team";

function Team() {
  return (
    <div className="w-full">
      {TeamData.Faculty.length !== 0 && (
        <div className="w-full flex flex-col gap-8 justify-center items-center px-2 py-6">
          <h3 className="text-yellow-600 font-semibold uppercase tracking-widest text-s">
            Faculty Team
          </h3>
          {TeamData.length === 0 && (
            <p className="text-white/60">No Team Members Found</p>
          )}
          {/* <div className="flex gap-8 md:gap-16 justify-center items-center flex-wrap">
            {TeamData.Faculty.Tier1.map((item, key) => (
              <MemberCard
                designation={item.desg}
                name={item.name}
                image={item.img}
                key={key}
                linkedIn={item.linkedIn}
              />
            ))}
          </div> */}
          <div className="flex gap-8 md:gap-24 justify-center items-center flex-wrap md:mt-6">
            {TeamData.Faculty.Tier2.map((item, key) => (
              <MemberCard
                designation={item.desg}
                name={item.name}
                image={item.img}
                position={item.position}
                key={key}
                linkedIn={item.linkedIn}
              />
            ))}
          </div>
        </div>
      )}

      {TeamData.Core.length !== 0 && (
        <div className="w-full flex flex-col gap-8 justify-center items-center px-2 py-6">
          <h3 className="text-yellow-600 font-semibold uppercase tracking-widest text-s">
            Gen Sec
          </h3>
          {TeamData.length === 0 && (
            <p className="text-white/60">No Team Members Found</p>
          )}
          <div className="flex gap-8 md:gap-16 justify-center items-center flex-wrap">
            {TeamData.Core.Tier1.map((item, key) => (
              <MemberCard
                designation={item.desg}
                name={item.name}
                image={item.img}
                position={item.position}
                key={key}
                linkedIn={item.linkedIn}
              />
            ))}
          </div>
        </div>
      )}

      {TeamData.Coordinators && TeamData.Coordinators.length !== 0 && (
        <div className="w-full flex flex-col gap-8 justify-center items-center px-2 py-6">
          <h3 className="text-yellow-600 font-semibold uppercase tracking-widest text-s">
            Coordinators
          </h3>
          {TeamData.length === 0 && (
            <p className="text-white/60">No Team Members Found</p>
          )}
          <div className="flex gap-10 md:gap-16 justify-center items-center flex-wrap">
            {TeamData.Coordinators.map((item, key) => (
              <MemberCard
                designation={item.desg}
                name={item.name}
                image={item.img}
                position={item.position}
                key={key}
                linkedIn={item.linkedIn}
              />
            ))}
          </div>
        </div>
      )}

      {TeamData.Executives.length !== 0 && (
        <div className="w-full flex flex-col gap-8 justify-center items-center px-2 py-6">
          <h3 className="text-yellow-600 font-semibold uppercase tracking-widest text-s">
            Executives Team
          </h3>
          {TeamData.length === 0 && (
            <p className="text-white/60">No Team Members Found</p>
          )}
          <div className="flex gap-10 md:gap-16 justify-center items-center flex-wrap">
            {TeamData.Executives.map((item, key) => (
              <MemberCard
                designation={item.desg}
                name={item.name}
                image={item.img}
                position={item.position}
                key={key}
                linkedIn={item.linkedIn}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
