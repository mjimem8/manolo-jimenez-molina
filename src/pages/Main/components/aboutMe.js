import PropTypes from 'prop-types';

export const AboutMe = ({ infoPersonal: info }) => {

  const openGithub = (event) => {
    event.preventDefault(); 
    window.open('https://' + info.gitHub, '_blank');
  }
  
  return (
    <div id="fh5co-about" className="animate-box">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Sobre mi</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="info">
              <li><span className="first-block">Nombre:</span><span className="second-block">{ info.name }</span></li>
              <li><span className="first-block">Teléfono:</span><span className="second-block">{ info.phone }</span></li>
              <li><span className="first-block">Email:</span><span className="second-block">{ info.email }</span></li>
              <li><span className="first-block">GitHub:</span><span className="second-block" onClick={ openGithub } > <a> { info.gitHub } </a></span></li>
              <li><span className="first-block">Dirección:</span><span className="second-block">{ info.address }, { info.city } - { info.postalCode } -({ info.province })</span></li>
            </ul>
          </div>
          <div className="col-md-8">
            <h2>Hola a todos!</h2>
            <p>{ info.info }</p>
          </div>
        </div>
      </div>
    </div>
  );

}

AboutMe.propTypes = {
  infoPersonal: PropTypes.object.isRequired
}