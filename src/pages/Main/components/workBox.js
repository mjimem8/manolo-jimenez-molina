import { useState } from "react";
import { ModalSimple } from "../../../shared/modalSimple";

export const WorkBox = ({work}) => {
  
  const [show, setShow] = useState(false);

  return (
    <div className="col-md-3 text-center col-padding animate-box">
      <a className="work" style={{backgroundImage:  `url(${work.photo})`}}>
        <div className="desc" onClick={ e => setShow(true) }>
          <h3>{ work.name }</h3>
          <span>{ work.technology }</span>
        </div>
      </a>
      <ModalSimple title={ work.name } body={ work.name } show={ show } setShow={ setShow } />
    </div>
  );

}
