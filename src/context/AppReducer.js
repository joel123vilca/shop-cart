export default function appReducer(state, action) {
    switch (action.type) {
      case "PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
      case "PRODUCT":
        return {
          ...state,
          product: action.payload,
        };
      case "ADD_CART":
        return {
          ...state,
          carts: [...state.carts, action.payload],
        };
      default:
        return state;
    }
  };