import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCart, delCart } from '../redux/action/cartAction';

const CartProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cart);
  console.log('cartState', cartState);

  const handleIncreButton = (cartData) => {
    dispatch(addToCart(cartData));
  };
  const handleDecreButton = (cartData) => {
    dispatch(delCart(cartData));
  };

  return (
    <div className="container my-4 py-5">
      <div className="row py-4">
        {cartState.length == '' ? (
          <>
            <h3 style={{ display: 'flex', justifyContent: 'center' }}>
              No Item Found!
            </h3>
            <button
              className="btn btn-dark"
              style={{ width: '100%' }}
              onClick={() => history.push('/')}
            >
              Go Home
            </button>
          </>
        ) : (
          <>
            {cartState?.map((data) => (
              <>
                <div className="col-md-6">
                  <img
                    src={data.image}
                    alt={data.title}
                    title={data.title}
                    height="200px"
                    width="180px"
                  />
                </div>
                <div className="col-md-6">
                  <h3 className="">{data.title}</h3>
                  <h5 className=" fw-bold my-4">$ {data.price}</h5>
                  <p className="lead fw-bold">
                    {data.qty} X ${data.price} = $
                    {(data.qty * data.price).toFixed(2)}
                  </p>
                  <button
                    className="btn btn-outline-dark me-4"
                    onClick={() => handleDecreButton(data)}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => handleIncreButton(data)}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CartProduct;
