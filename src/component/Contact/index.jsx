import React from 'react';
import './index.css'; 
import mapShipping from '../../assets/Contact/mapshipping.webp';

const Contact = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 pt-5">
            <h3>Contacto</h3>
            <form id="contact-form">
              <div className="messages"></div>
              <div className="controls">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="form_name">Nombre</label>
                      <input 
                        id="form_name" 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Nombre" 
                        required 
                        minLength="0" 
                        maxLength="40"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="form_lastname">Apellido</label>
                      <input 
                        id="form_lastname" 
                        type="text" 
                        name="surname" 
                        className="form-control" 
                        placeholder="Apellido" 
                        required 
                        minLength="0" 
                        maxLength="40"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="form_email">Email</label>
                      <input 
                        id="form_email" 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        placeholder="tumail@email.com" 
                        required 
                        minLength="0" 
                        maxLength="40"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="form_phone">Teléfono</label>
                      <input 
                        id="form_phone" 
                        type="tel" 
                        name="phone" 
                        className="form-control" 
                        placeholder="Ingrese su teléfono" 
                        required 
                        minLength="0" 
                        maxLength="40"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="form_message">Mensaje</label>
                  <textarea 
                    id="form_message" 
                    name="message" 
                    className="form-control" 
                    placeholder="Escriba el mensaje que desea enviar" 
                    rows="8" 
                    required 
                    minLength="0" 
                    maxLength="600"
                  ></textarea>
                </div>
                <input type="submit" className="btn btn-outline-dark mb-5" value="Enviar Mensaje" />
              </div>
            </form>
          </div>
          <div className="col-xl-6 pt-5 ps-5 mb-5 d-flex justify-content-center">
            <div className="card border-0" style={{ width: '25rem' }}>
              <h4>Zonas de Envío</h4>
              <img src={mapShipping} className="card-img-top" alt="Mapa de Envío" />
              <div className="card-body">
                <small className="text-body-secondary">Por consultas sobre envíos se recomienda agregar en mensaje la dirección exacta del envío, el mismo corre por cuenta del comprador</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
