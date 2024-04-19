import React, { useState } from 'react';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import products from '../assets/fake-data/products';
import ProductCard from '../components/UI/product-card/ProductCard';
import '../styles/all-foods.css';
import ReactPaginate from 'react-paginate';
import '../styles/pagination.css';

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm === '') {
      return item;
    } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  });

  const productsPerPage = 8;
  const visitedPage = pageNumber * productsPerPage;
  const displayProducts = searchedProduct.slice(
    visitedPage,
    visitedPage + productsPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title='Всё меню'>
      <CommonSection title='Всё меню' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6' xs='12'>
              <div className='search__widget d-flex align-items-center justify-content-between'>
                <input
                  type='text'
                  placeholder="Я ищу..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className='ri-search-line'></i>
                </span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6' xs='12' className='mb-4'>
              <div className='sorting__widget text-end'>
                <select className='w-50'>
                  <option>По умолчанию</option>
                  <option value='ascending'>По алфавиту, А-Я</option>
                  <option value='descending'>По алфавиту, Я-А</option>
                  <option value='high-price'>Сначала дорогие</option>
                  <option value='low-price'>Сначала дешевые</option>
                </select>
              </div>
            </Col>

            {displayProducts.map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                <ProductCard item={item} />
              </Col>
            ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel='Предыдущая'
                nextLabel='Следующая'
                containerClassName='paginationBtns'
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;