import React from 'react';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/cart-page.css';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { cartActions } from '../store/shopping-cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title='Корзина'>
      <CommonSection title='Ваша корзина' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {cartItems.length === 0 ? (
                <h5 className='text-center'>Ваша корзина пуста</h5>
              ) : (
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th>Изображение</th>
                      <th>Название товара</th>
                      <th>Цена</th>
                      <th>Количество</th>
                      <th>Удалить</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}
              <div className='mt-4'>
                <h6>
                  Итого:
                  <span className='cart__subtotal'> ${totalAmount}</span>
                </h6>
                <p>Налоги и стоимость доставки будут рассчитаны при оформлении заказа</p>
                <div className='cart__page-btn'>
                  <button className='addToCart__btn me-4'>
                    <Link to='/foods'>Продолжить покупки</Link>
                  </button>
                  <button className='addToCart__btn'>
                    <Link to='/checkout'>Оформить заказ</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => dispatch(cartActions.deleteItem(id));

  return (
    <tr>
      <td className='text-center cart__img-box'>
        <img src={image01} alt='food'></img>
      </td>
      <td className='text-center'>{title}</td>
      <td className='text-center'>{price} сом</td>
      <td className='text-center'>{quantity} шт.</td>
      <td onClick={deleteItem} className='text-center cart__item-del'>
        <i className='ri-delete-bin-line'></i>
      </td>
    </tr>
  );
};

export default Cart;
