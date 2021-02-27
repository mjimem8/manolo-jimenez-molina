export const WorkBox = ({work}) => {

  return (
    <div className="col-md-3 text-center col-padding animate-box">
      <a href="#" className="work" style={{backgroundImage:  `url(${work.photo})`}}>
        <div className="desc">
          <h3>{ work.name }</h3>
          <span>{ work.technology }</span>
        </div>
      </a>
    </div>
  );

}
