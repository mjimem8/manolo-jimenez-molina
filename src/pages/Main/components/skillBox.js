export const SkillBox = ({percentaje, name}) => {

  const randomNumber = Math.floor(Math.random() * 5) + 1;

  return (
    <div className="progress-wrap">
      <h3><span className="name-left">{ name }</span><span className="value-right">{ percentaje }%</span></h3>
      <div className="progress">
        <div className={`progress-bar progress-bar-${randomNumber} progress-bar-striped active`} role="progressbar"
        aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: `${percentaje}%`}}>
        </div>
      </div>
    </div>
  );

}
