import React from 'react';
import { skills } from "../../../data";
import { SkillBox } from "./skillBox";

export const Skills = () => {

  return (
    <div id="fh5co-skills" className="animate-box">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Skills</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
           {
             skills.slice(0,6).map(s =>(
               <SkillBox key={ s.name } percentaje={ s.percentaje } name={ s.name }/>
             ))
           }
          </div>
          <div className="col-md-6">
            {
              skills.slice(6,12).map(s =>(
                <SkillBox key={ s.name } percentaje={ s.percentaje } name={ s.name }/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );

}
