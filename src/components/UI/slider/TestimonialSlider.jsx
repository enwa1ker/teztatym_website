import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';
import ava04 from '../../../assets/images/ava-4.jpg';
import '../../../styles/slider.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className='review__text'>
          "Отличное место для быстрого перекуса! Заказал несколько бургеров на вынос и был приятно удивлен быстрой подачей. Все очень вкусно, спасибо!"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' className=' rounded' />
          <h6>Курманбек С.</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
          "Я впервые заказала еду в TezTatym через их сайт, и была приятно удивлена! Заказ оформился очень быстро, еда была свежей и вкусной. Обязательно вернусь снова!"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava02} alt='avatar' className='rounded' />
          <h6>Сайра Н.</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
          "Быстрая доставка и отличное качество еды! Заказывал ужин на дом несколько раз, всегда доволен сервисом и вниманием к деталям"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava03} alt='avatar' className=' rounded' />
          <h6>Али Б.</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
          "TezTatym стал моим любимым местом для встреч с друзьями. У них уютная обстановка и вкуснейшие закуски. Обязательно попробуйте их фирменные бургеры"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava04} alt='avatar' className=' rounded' />
          <h6>Кыял А.</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
