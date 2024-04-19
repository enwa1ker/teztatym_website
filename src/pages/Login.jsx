import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title='Вход'>
      <CommonSection title='Вход' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mb-5' onSubmit={submitHandler}>
                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Электронная почта'
                    ref={loginNameRef}
                  />
                </div>
                <div className='form__group'>
                  <input
                    type='password'
                    placeholder='Пароль'
                    ref={loginPasswordRef}
                  />
                </div>
                <button type='submit' className='addToCart__btn'>
                  Войти
                </button>
              </form>
              <Link to='/register'>Впервые здесь? Создать аккаунт</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
