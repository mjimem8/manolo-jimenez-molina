import React from 'react';
import { myResume } from "../../../data";
import { BranchBox } from "./branchBox";

export const MyResume = () => {

  return (
    <div id="fh5co-resume" className="fh5co-bg-color">
    <div className="container">
      <div className="row animate-box">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
          <h2>Mi historia</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-md-offset-0">
          <ul className="timeline">
            <li className="timeline-heading text-center animate-box">
              <div><h3>Experiencia</h3></div>
            </li>
            {
              myResume.workExperiences.map((experiencie, i) => (
                <BranchBox key={ experiencie.header } data={experiencie} isInverted={ Boolean(i % 2) }/>
              ))
            }
            <br/>
            <li className="timeline-heading text-center animate-box">
              <div><h3>Formación</h3></div>
            </li>
            {
              myResume.studies.map((studie, i) => (
                <BranchBox key={ studie.header } data={studie} isInverted={ Boolean(i % 2) }/>
              ))
            }
            </ul>
        </div>
      </div>
    </div>
  </div>
  );

}
