export const addToCart = (film) => {
    return {
      type: "ADD_TO_CART",
      payload: film,
    };
  };
  
  export const removeFromCart = (film) => {
    return {
      type: "REMOVE_FROM_CART",
      payload: film,
    };
  };