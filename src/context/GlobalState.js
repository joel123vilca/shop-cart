import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import appReducer from './AppReducer';

const initialState = {
  products: [],
  product: null,
  carts: []
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(async () => {
    const response = await axios(
      'https://fakestoreapi.com/products',
    );
    dispatch({
      type: "PRODUCTS",
      payload: response.data
    });
  }, []);

  async function getProduct(id) {
    const response = await axios(
      `https://fakestoreapi.com/products/${id}`,
    );
    dispatch({
      type: "PRODUCT",
      payload: response.data
    });
  }

  function addCart(product) {
    dispatch({
      type: "ADD_CART",
      payload: product
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        products:state.products,
        product:state.product,
        carts:state.carts,
        getProduct,
        addCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};