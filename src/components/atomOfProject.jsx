import React from "react";
import BadgeSkill from "./badgeSkill";


function AtomOfProject(props) {
  let badge = props.content.badge;

  return (
    <div className="relative ">
      <div className=" lg:ml-28 ml-16  lg:w-[60vw] w-[70vw] shadow-lg shadow-purple-400 border-2 rounded-3xl p-4 flex max-sm:flex-col mt-14">
        <img className="xl:h-[11vw] sm:h-[15vw] h-[30vw] object-cover rounded-3xl" src={props.content.img}></img>
        <div className="lg:ml-10 ml-2 mt-2">
          <div className="flex justify-between mt-2">
            <div className=" lg:text-[2vw] text-[3vw] ">
              {props.content.title}
            </div>
            <div className="md:text-[1vw] text-[1.5vw] sm:absolute top-4 md:right-[1vw]">
              {props.content.date}
            </div>
          </div>

          <div className=" w-[100%] pt-10 h-18 flex flex-wrap gap-3 ">
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
