import { myWorks } from "../../../data";
import { WorkBox } from "./workBox";

export const Works = () => {

  return (
    <div id="fh5co-work" className="fh5co-bg-dark">
    <div className="container">
      <div className="row animate-box">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
          <h2>Mis trabajos</h2>
        </div>
      </div>
      <div className="row">
        { 
          myWorks.map(w => (
            <WorkBox work={ w } />
          ))
        }
      </div>
    </div>
  </div>

  );

}
