import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/cartAction';
import { useParams } from 'react-router-dom';
import { rootApiUrl } from '../constants';
import { SingleLoading } from '../constants/Loading';
import SingleProduct from './SingleProduct';

const Product = (props) => {
  // console.log('params->', props.match);
  const { proId } = useParams();
  const dispatch = useDispatch();

  const [singleProduct, setSingleProduct] = useState([]);
  // const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const getSingleProduct = async () => {
    setLoading(true);
    try {
      await axios
        .get(`${rootApiUrl}/products/${proId}`)
        .then((response) => {
          console.log('response', response);
          const { status, data } = response;
          if (status === 200) {
            setSingleProduct(data);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addProductCart = (productData) => {
    dispatch(addToCart(productData));
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <div>
      <div className="container my-4 py-5">
        <div className="row py-4">
          {loading ? (
            <SingleLoading />
          ) : (
            <SingleProduct
              singleProduct={singleProduct}
              addProductCart={addProductCart}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
