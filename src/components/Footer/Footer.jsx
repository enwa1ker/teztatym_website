import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook.png';
import insta from '../../assets/images/instagram.png';
import telega from '../../assets/images/telegram.png';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='footer__logo text-start'>
              <img src={logo} alt='логотип' />
              <p>
                Быстрая и удобная доставка еды, чтобы порадовать вас.
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Время доставки</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Понедельник - Четверг</span>
                <p>10:00 - 21:00</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Пятница - Воскресенье</span>
                <p>11:00 - 23:00</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Контакты</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Адрес: ул. Горького, 123</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Телефон: +996 705-283-716</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: teztatym@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Рассылка</h5>
            <p>Подпишитесь на нашу рассылку</p>
            <div className='newsletter'>
              <input type='email' placeholder='Введите ваш email'></input>
              <span>
                <i class='ri-send-plane-line'></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>
              TezTatym - 2024
            </p>
          </Col>
          <Col lg='6' md='6'>
            <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
              <p className='m-0'>Подписывайтесь на нас: </p>
              <span>
                <a href=''>
                  <img src={facebook} alt="" />
                </a>
              </span>
              <span>
                <a href=''>
                <img src={insta} alt="" />
                </a>
              </span>
              <span>
                <a href=''>
                <img src={telega} alt="" />
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
