import React from 'react';
export const ServiceBox = ({title, subtitle, icon}) => {

  return (
    <div className="col-md-4 text-center">
      <div className="feature-left">
        <span className="icon">
          <i className={ icon }></i>
        </span>
        <div className="feature-copy">
          <h3>{ title }</h3>
          <p>{ subtitle }</p>
        </div>
      </div>
    </div>
  );

}
