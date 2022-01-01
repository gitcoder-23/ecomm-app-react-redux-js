import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { rootApiUrl } from '../constants';
import { BulkLoading as Loading } from '../constants/Loading';
import ProductList from './ProductList';

const Products = () => {
  const [proData, setProData] = useState([]);
  const [filter, setFilter] = useState(proData);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const getProducts = async () => {
    setLoading(true);
    await axios
      .get(`${rootApiUrl}/products`)
      .then((response) => {
        console.log('response', response);
        if (componentMounted && response.status == 200) {
          setProData(response.data);
          setFilter(response.data);
          setLoading(false);
          console.log('filter', filter);
        }
        return () => {
          componentMounted = false;
        };
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? (
              <Loading />
            ) : (
              <ProductList
                filter={filter}
                setFilter={setFilter}
                proData={proData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
