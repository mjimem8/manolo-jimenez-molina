import cover1 from '../../../images/cover_bg_1.jpg';
import emailjs from 'emailjs-com';
import { confEmailJS } from '../../../data';
import { useState } from 'react';

export const ContactUs = () => {

  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formError, setFormErrors] = useState({
    fname: '',
    email: '',
    subject: '',
    message: ''
  });
 
  const handleChange = (value, key) => {
    setFormData(data => {
      return {
        ...data,
        [key]: value
      }
    });
  }

  const send = (e) => {
    e.preventDefault();
    
    validateErrosForms();
    
    const invalidForm = Object.values(formData).some(value => !value);
    if ( !invalidForm ) {
      const { serviceId, templateId, userId } = confEmailJS;
      
      // emailjs.send(serviceId, templateId, formData, userId)
      // .then((response) => {
      //   //mensaje enviado
      //   //refresh pagina
      // }, (err) => {
      //   //error
      // });
    }
  }

  const validateErrosForms = () => {
      if ( formData.email ) {
        validateEmail(formData.email) ? setError('email', '') : setError('email', 'El formato de correo no es correcto');
      } else {
        setError('email', 'Campo requerido')
      }
      formData.fname ? setError('fname', '') : setError('fname', 'Campo requerido');
      formData.subject ? setError('subject', '') : setError('subject', 'Campo requerido');
      formData.message ? setError('message', '') : setError('message', 'Campo requerido');
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  const setError = (key, value) => {
    setFormErrors(data => {
      return {
        ...data,
        [key]: value
      }
    });
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
                <input type="text" id="fname" className="form-control" placeholder="Tu nombre" onChange={ e => handleChange(e.target.value, 'fname') } />
                <span style={{color: "red"}}>{ formError.fname }</span>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <input type="text" id="email" className="form-control" placeholder="Tu correo" onChange={ e => handleChange(e.target.value, 'email') } />
                <span style={{color: "red"}}>{ formError.email }</span>
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <input type="text" id="subject" className="form-control" placeholder="Asunto del mensaje" onChange={ e => handleChange(e.target.value, 'subject') } />
                <span style={{color: "red"}}>{ formError.subject }</span>
              </div>
            </div>

            <div className="row form-group">
              <div className="col-md-12">
                <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Mensaje" onChange={ e => handleChange(e.target.value, 'message') }></textarea>
                <span style={{color: "red"}}>{ formError.message }</span>
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
