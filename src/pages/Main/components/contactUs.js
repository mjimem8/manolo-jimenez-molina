import cover1 from '../../../images/cover_bg_1.jpg';
import emailjs from 'emailjs-com';
import { confEmailJS } from '../../../data';

export const ContactUs = () => {

  const templateParams = {
    fname: 'James',
    email: 'emaiol this out!',
    subject: 'subject',
    message: 'message'
};
 
  const send = (e) => {
    e.preventDefault();
    const { serviceId, templateId, userId } = confEmailJS;
    console.log(e);

    // emailjs.send(serviceId, templateId, templateParams, userId)
    //   .then((response) => {
    //     //mensaje enviado
    //   }, (err) => {
    //     //error
    //   });
  }

  return (
    <>
      <div id="fh5co-started" className="fh5co-bg-dark">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Consultame!</h2>
              <p>¿Tienes alguna pregunta? No dudes en contactar conmigo, yo siempre estoy abierto a tener una bonita charla técnica.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="fh5co-consult">
        <div className="video fh5co-video" style={{backgroundImage: `url(${cover1})`}}>
          <div className="overlay"></div>
        </div>
        <div className="choose animate-box">
          <h2>Contacto</h2>
          <form onSubmit={ send }>
            <div className="row form-group">
              <div className="col-md-6">
                <input type="text" id="fname" className="form-control" placeholder="Tu nombre"/>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <input type="text" id="email" className="form-control" placeholder="Tu correo"/>
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <input type="text" id="subject" className="form-control" placeholder="Asunto del mensaje"/>
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Mensaje"></textarea>
              </div>
            </div>
            <div className="form-group">
              <input type="submit" value="Enviar mensaje" className="btn btn-primary"/>
            </div>

          </form>	
        </div>
      </div>
    </>
  );

}
