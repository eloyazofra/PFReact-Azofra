import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'
import qr from '../../assets/Footer/qr.webp'

const Footer = () => {
  return (
    <footer>
      <Container fluid className="bg-black pt-3" data-bs-theme="dark">
        <Row className="deco">
          <Col xl={4} className="text-center">
            <ul className="list-group list-group-flush text-white">
              <li className="list-group-title">Categorias</li>
              <li className="list-group-item">
                <a href="">Inicio</a>
              </li>
              <li className="list-group-item">
                <a href="">Productos</a>
              </li>
              <li className="list-group-item">
                <a href="">Grabados Láser</a>
              </li>
              <li className="list-group-item">
                <a href="">Contacto</a>
              </li>
            </ul>
          </Col>

          <Col xl={4} className="text-center ps-5 d-flex align-items-center justify-content-center">
            <img
            className="rounded-4"
            src= {qr}
            alt="qr"
            width="150"
            height="150"
            />
          </Col>

          <Col xl={4}>
            <div className="text-center">
            <ul className="list-group pt-2">
              <li className="list-group-title">Contactanos</li>
              <li className="list-group-item">
                <a href="https://wa.me/116134567">WhatsApp: 116134567</a>
              </li>
              <li className="list-group-item">
                <a href="mailto:floki.diseno@gmail.com">floki.diseno@gmail.com</a>
              </li>
              <li className="list-group-item">Avellaneda - Buenos Aires</li>
            </ul>
              <a href="#"><i className="fa-brands fa-twitter ps-2"></i></a>
              <a href="#"><i className="fa-brands fa-instagram ps-2"></i></a>
              <a href="#"><i className="fa-brands fa-youtube ps-2"></i></a>
              <a href="#"><i className="fa-brands fa-twitch ps-2"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
