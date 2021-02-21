import portfolio1 from './images/portfolio-1.jpg';
import portfolio2 from './images/portfolio-2.jpg';
import portfolio3 from './images/portfolio-3.jpg';
import portfolio4 from './images/portfolio-4.jpg';
import portfolio5 from './images/portfolio-5.jpg';
import portfolio6 from './images/portfolio-6.jpg';
import portfolio7 from './images/portfolio-7.jpg';
import portfolio8 from './images/portfolio-8.jpg';

export const Works = () => {

  return (
    <div id="fh5co-work" className="fh5co-bg-dark">
    <div className="container">
      <div className="row animate-box">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
          <h2>Work</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 text-center col-padding animate-box">
          <a href="#" className="work" style={{backgroundImage:  `url(${portfolio1})`}}>
            <div className="desc">
              <h3>Project Name</h3>
              <span>Illustration</span>
            </div>
          </a>
        </div>
        <div className="col-md-3 text-center col-padding animate-box">
          <a href="#" className="work" style={{backgroundImage:  `url(${portfolio2})`}}>
            <div className="desc">
              <h3>Project Name</h3>
              <span>Brading</span>
            </div>
          </a>
        </div>
        <div className="col-md-3 text-center col-padding animate-box">
          <a href="#" className="work" style={{backgroundImage:  `url(${portfolio3})`}}>
            <div className="desc">
              <h3>Project Name</h3>
              <span>Illustration</span>
            </div>
          </a>
        </div>
        <div className="col-md-3 text-center col-padding animate-box">
          <a href="#" className="work" style={{backgroundImage:  `url(${portfolio4})`}}>
            <div className="desc">
              <h3>Project Name</h3>
              <span>Design</span>
            </div>
          </a>
        </div>
        <div className="col-md-3 text-center col-padding animate-box">
          <a href="#" className="work" style={{backgroundImage:  `url(${portfolio5})`}}>
            <div className="desc">
              <h3>Project Name</h3>
              <span>Website</span>
            </div>
          </a>
        </div>
        <div className="col-md-3 text-center col-padding animate-box">
          <a href="#" className="work" style={{backgroundImage:  `url(${portfolio6})`}}>
            <div className="desc">
              <h3>Project Name</h3>
              <span>Illustration</span>
            </div>
          </a>
        </div>
        <div className="col-md-3 text-center col-padding animate-box">
          <a href="#" className="work" style={{backgroundImage:  `url(${portfolio7})`}}>
            <div className="desc">
              <h3>Project Name</h3>
              <span>Brading</span>
            </div>
          </a>
        </div>
        <div className="col-md-3 text-center col-padding animate-box">
          <a href="#" className="work" style={{backgroundImage:  `url(${portfolio8})`}}>
            <div className="desc">
              <h3>Project Name</h3>
              <span>Illustration</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  );

}
