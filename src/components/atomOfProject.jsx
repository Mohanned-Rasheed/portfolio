import React from "react";
import BadgeSkill from "./badgeSkill";


function AtomOfProject(props) {
  let badge = props.content.badge;

  return (
    <div className="relative">
      <div className=" lg:ml-28 ml-16  xl:w-[93%] w-[80%] shadow-2xl shadow-purple-300 border-2 rounded-3xl p-4 flex flex-row mt-14">
        <img className="md:h-40 h-20 rounded-3xl" src={props.content.img}></img>
        <div className="lg:ml-10 ml-2 mt-2">
          <div className="flex justify-between mt-2">
            <div className=" lg:text-3xl md:text-xl sm:text-base text-[10px] ">
              {props.content.title}
            </div>
            <div className="md:text-xs sm:text-[10px] text-[7px] absolute top-4 xl:right-0 sm:right-24 xs:right-20 right-10">
              {props.content.date}
            </div>
          </div>

          <div className="xl:w-[100%] w-[100%] pt-10 h-18 flex flex-wrap gap-3 ">
            {badge.map((element) => {
              return (
                <BadgeSkill
                  img={element.badge}
                  text={element.text}
                  delay={element.delay}
                ></BadgeSkill>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AtomOfProject;
