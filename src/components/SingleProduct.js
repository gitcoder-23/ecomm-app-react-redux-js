import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleProduct = (props) => {
  const { singleProduct, addProductCart } = props;
  return (
    <>
      <div className="col-md-6">
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          title={singleProduct.title}
          height="400px"
          width="400px"
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">
          {singleProduct.category}
        </h4>
        <h1 className="display-5">{singleProduct.title}</h1>
        <p className="lead fw-bolder">
          Rating: {singleProduct.rating && singleProduct.rating.rate}
          <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">$ {singleProduct.price}</h3>
        <p className="lead">
          {singleProduct.description?.substring(1, 200)}...
        </p>
        <button
          className="btn btn-outline-dark px-4 py-2"
          onClick={() => addProductCart(singleProduct)}
        >
          Add To Cart
        </button>{' '}
        &nbsp;
        <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
          Go To Cart
        </NavLink>
      </div>
    </>
  );
};

export default SingleProduct;
