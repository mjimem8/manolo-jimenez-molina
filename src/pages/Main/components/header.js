import cover3 from '../../../images/cover_bg_3.jpg';
import user from '../../../images/user-3.jpg';
import PropTypes from 'prop-types';

export const Header = ({ name, profession, urlLinkedin }) => {
  
  const openLinkedin = (event) => {
    event.preventDefault(); 
    window.open(urlLinkedin, '_blank');
  }

  return (
    <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{backgroundImage: `url(${cover3})`}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t js-fullheight">
              <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                <div className="profile-thumb" style={{backgroundImage: `url(${user})`}}></div>
                <h1><span>{ name }</span></h1>
                <h3><span>{ profession }</span></h3>
                <ul className="fh5co-social-icons">
                  <li onClick={ openLinkedin }><a><i className="icon-linkedin2"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  urlLinkedin: PropTypes.string.isRequired
}