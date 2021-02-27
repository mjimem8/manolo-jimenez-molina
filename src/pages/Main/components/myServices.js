import { ServiceBox } from "./serviceBox";
import { myServices } from "../../../data";

export const MyServices = () => {

  return (
    <div id="fh5co-features" className="animate-box">
      <div className="container">
        <div className="services-padding">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Mis servicios</h2>
            </div>
          </div>
          <div className="row">
            {
              myServices.slice(0,3).map(s => (
                <ServiceBox key={ s.title } title={ s.title } subtitle={s.subtitle} icon={ s.icon }/>
              ))
            }
          </div>

          <div className="row">
            {
              myServices.slice(3,6).map(s => (
                <ServiceBox key={ s.title } title={ s.title } subtitle={s.subtitle} icon={ s.icon }/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );

}
