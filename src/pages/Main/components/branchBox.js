export const BranchBox = ({data, isInverted}) => {

  return (
    <li className="animate-box" className={ isInverted ?  'timeline-inverted' : 'timeline-unverted' } >
      <div className="timeline-badge"><i className="icon-suitcase"></i></div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h3 className="timeline-title">{ data.header }</h3>
          <span className="company">{ data.subheader1 }</span>
          <span className="company">{ data.subheader2 }</span>
        </div>
        <div className="timeline-body">
          <p>{ data.body }</p>
        </div>
      </div>
    </li>
  );

}
