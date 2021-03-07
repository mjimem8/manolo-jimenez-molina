import React from 'react';
import { lastCourses } from "../../../data";
import { NewsBox } from "./newsBox";

export const News = () => {

  return (
    <div id="fh5co-blog">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Últimos cursos</h2>
            <p></p>
          </div>
        </div>
        <div className="row">
        {
          lastCourses.map(n => (
            <NewsBox key={ n.title } news={ n }/>
          ))
        }
        </div>
      </div>
    </div>
  );

}
