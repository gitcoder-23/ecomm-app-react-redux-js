import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const ProductList = ({ filter, setFilter, proData }) => {
  const history = useHistory();
  const filterProduct = (catData) => {
    const updatedList = proData.filter(
      (allData) =>
        // console.log('allData', allData)
        // click on catyegory based filter
        allData.category === catData
      // return allData;
    );
    console.log('updatedList', updatedList);
    setFilter(updatedList);
  };
  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => setFilter(proData)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct('jewelery')}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark me-2"
          // category name same as API given
          onClick={() => filterProduct('electronics')}
        >
          Electronic
        </button>
      </div>
      {filter.map((product) => {
        return (
          <>
            <div className="col-md-3">
              <div class="card h-100 text-center p-4" key={product.id}>
                <img
                  src={product.image}
                  class="card-img-top"
                  alt={product.title}
                  height="250px"
                  style={{ cursor: 'pointer' }}
                  onClick={() => history.push(`/product/view/${product.id}`)}
                />
                <div class="card-body">
                  <h5 class="card-title mb-0">
                    {/* Minimize title size */}
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p class="card-text lead fw-bold">${product.price}</p>
                  <button
                    to="#"
                    class="btn btn-outline-dark"
                    onClick={() => history.push(`/product/view/${product.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ProductList;
