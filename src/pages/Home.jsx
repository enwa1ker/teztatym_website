import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import heroImg from '../assets/images/main-burger.png';
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category.jsx';
import '../styles/home.css';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import products from '../assets/fake-data/products.js';
import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';
import ProductCard from '../components/UI/product-card/ProductCard.jsx';
import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';

const featureData = [
  {
    title: 'Быстрая доставка',
    imgUrl: featureImg01,
    desc: 'Мы гарантируем быструю доставку вашего заказа прямо к вашей двери. ',
  },
  {
    title: 'Уютная атмосфера',
    imgUrl: featureImg02,
    desc: 'Наша уютная и гостеприимная атмосфера делает ваше посещение у нас приятным и комфортным. ',
  },
  {
    title: 'Простой заказ',
    imgUrl: featureImg03,
    desc: 'Хотите быстро и удобно оформить заказ в TezTatym? Мы сделали процесс заказа максимально простым для вашего комфорта ',
  },
];

const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === 'Pizza');
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }
    if (category === 'BURGER') {
      const filteredProducts = products.filter((item) => item.category === 'Burger');
      setAllProducts(filteredProducts);
    }
    if (category === 'PIZZA') {
      const filteredProducts = products.filter((item) => item.category === 'Pizza');
      setAllProducts(filteredProducts);
    }
    if (category === 'BREAD') {
      const filteredProducts = products.filter((item) => item.category === 'Bread');
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title='Главная'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <h5 className='mb-3'>
                  Быстрая и удобная доставка еды 
                </h5>
                <h1 className='mb-4 hero__title'>
                  <span>ГОЛОДНЫ?</span> еда <br /> уже у вашей
                  <span> двери!</span>
                </h1>

                <p>
                  Быстро и вкусно
                </p>

                <div className='hero__btns d-flex align-items-center gap-5 mt-4'>
                  <button className='order__btn d-flex align-items-center justify-content-between'>
                    Заказать сейчас <i className='ri-arrow-right-s-line'></i>
                  </button>

                  <button className='all__foods-btn'>
                    <Link to='/foods'>Смотреть меню</Link>
                  </button>
                </div>
                <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-car-line'></i>
                    </span>
                    Бесплатная доставка
                  </p>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-shield-check-line'></i>
                    </span>
                    100% натуральная продукция
                  </p>
                </div>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='hero-img' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>Что мы предлагаем</h5>
              <h2 className='feature__title'> Просто и удобно</h2>
              <h2 className='feature__title'>
                быстро и <span>вкусно</span>
              </h2>
              <p className='mb-1 mt-4 feature__text'>
              Наша цель - обеспечить быстрое и качественное обслуживание. <br />
              Мы также предлагаем удобную доставку, чтобы вы могли наслаждаться нашими блюдами где угодно. 
              </p>
              <p className='mb-1 mt-4 feature__text'>
              Мы используем только свежие и качественные ингредиенты для создания неповторимых вкусов 
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                <div className='feature__item text-center px-5 py-3'>
                  <img
                    className='w-25 mb-3'
                    src={item.imgUrl}
                    alt='feature-img'
                  />
                  <h5 className='fw-bold mb-3'>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>  
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Меню</h2>
            </Col>
            <Col lg='12'>
              <div className='food__category d-flex align-items-center justify-content-center gap-5'>
                <button
                  onClick={() => setCategory('ALL')}
                  className={`all__btn ${
                    category === 'ALL' ? 'foodBtnActive' : ''
                  }`}
                >
                  Все
                </button>
                <button
                  onClick={() => setCategory('BURGER')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BURGER' ? 'foodBtnActive' : ''
                  }`}
                >
                  {/* <img src={foodCategoryImg01} alt='' /> */}
                  Бургеры
                </button>
                <button
                  onClick={() => setCategory('SHAURMA')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'SHAURMA' ? 'foodBtnActive' : ''
                  }`}
                >
                  {/* <img src={foodCategoryImg02} alt='' /> */}
                  Шаурма
                </button>
                <button
                  onClick={() => setCategory('PIZZA')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'PIZZA' ? 'foodBtnActive' : ''
                  }`}
                >
                  {/* <img src={foodCategoryImg02} alt='' /> */}
                  Пицца
                </button>
                <button
                  onClick={() => setCategory('Drink')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'DRINK' ? 'foodBtnActive' : ''
                  }`}
                >
                  {/* <img src={foodCategoryImg03} alt='' /> */}
                  Напитки
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className='why__choose-us'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='why-foodie' className='w-100'></img>
            </Col>
            <Col lg='6' md='6'>
              <div className='why__foodie'>
                <h2 className='foodie-title mb-4'>
                  Почему <span>TezTatym ?</span>
                </h2>
                <p className='foodie-desc'>
                TezTatym - это не просто место для питания, это опыт, который мы создаем для каждого нашего гостя. Вот почему выбирают нас:
                </p>
                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Свежая и вкусная продукция
                    </p>
                    <p className='choose__us-desc'>
                    Мы готовим только с использованием свежих и качественных ингредиентов. Наши блюда приносят радость и удовлетворение каждому, кто нас посещает.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Качественная поддержка
                    </p>
                    <p className='choose__us-desc'>
                    Мы гордимся нашей заботливой и профессиональной командой, которая всегда готова помочь и удовлетворить ваши потребности. Ваше удовлетворение - наш главный приоритет.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Заказ из любой точки
                    </p>
                    <p className='choose__us-desc'>
                    Не важно, где вы находитесь, вы всегда можете заказать у нас. Мы предлагаем удобный сервис доставки, чтобы вы могли насладиться нашей вкусной едой где угодно.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2>Горячая пицца</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg='3' md='4' key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='testimonial'>
                <h5 className='testimonial__subtitle mb-4'>Отзывы</h5>
                <h2 className='testimonial__title mb-40'>
                  Что о нас говорят <span>клиенты</span>
                </h2>
                <p className='testimonial__desc'>
                Узнайте, что говорят о нас наши посетители! Мы гордимся тем, что создаем приятные впечатления и удовлетворяем вкусовые предпочтения каждого гостя. Вот что некоторые из наших клиентов говорят о своем опыте:
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={networkImg} alt='testimonial-img' className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
