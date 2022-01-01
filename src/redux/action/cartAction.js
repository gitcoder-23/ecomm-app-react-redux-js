import { ADD_TO_CART, DELETE_FROM_CART } from './types/cartType';
// Add Item To Cart
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

// Delete Item To Cart
export const delCart = (product) => {
  return {
    type: DELETE_FROM_CART,
    payload: product,
  };
};
