import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREMENT_CART,
} from '../action/types/cartType';
// Type 1

// const initialState = {
//   allProduct: [],
//   loading: true,
//   isError: true,
// };
// const cartReducer = (state = initialState, action) => {
//   const product = action.payload;
//   switch (action.type) {
//     case ADD_TO_CART:
//       // Check product is already Exist
//       const exist = state.allProduct.find(
//         (proData) => proData.id === product.id
//       );
//       if (exist) {
//         // Increse the quantity
//         return state.allProduct.map((allData) =>
//           allData.id === product.id
//             ? { ...allData, qty: allData.qty + 1 }
//             : allData
//         );
//       } else {
//         const product = action.payload;
//         return [
//           ...state.allProduct,
//           {
//             ...product,
//             qty: 1,
//           },
//         ];
//       }
//     case DELETE_FROM_CART:
//       const existPro = state.allProduct.find(
//         (proData) => proData.id === product.id
//       );

//       if (existPro.qty === 1) {
//         return state.allProduct.filter((allData) => allData.id !== existPro.id);
//       } else {
//         return state.allProduct.map((allDataRe) =>
//           allDataRe.id === product.id
//             ? {
//                 ...allDataRe,
//                 qty: allDataRe.qty - 1,
//               }
//             : allDataRe
//         );
//       }

//     default:
//       return state;
//   }
// };

// type 2
const initialState = [];

const cartReducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      // Check product is already Exist
      const exist = state.find((proData) => proData.id === product.id);
      if (exist) {
        // Increse the quantity
        return state.map((allData) =>
          allData.id === product.id
            ? { ...allData, qty: allData.qty + 1 }
            : allData
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case DELETE_FROM_CART:
      const existPro = state.find((proData) => proData.id === product.id);

      if (existPro.qty === 1) {
        return state.filter((allData) => allData.id !== existPro.id);
      } else {
        return state.map((allDataRe) =>
          allDataRe.id === product.id
            ? {
                ...allDataRe,
                qty: allDataRe.qty - 1,
              }
            : allDataRe
        );
      }

    default:
      return state;
  }
};

export default cartReducer;
