function CartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    let { name, title, product } = action.payload;

    let cartProduct;

    cartProduct = {
      id: title,
      image: product.image,
      name: product.title,
      price: product.currentPrice,
      stock: product.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "REMOVE_CART") {
    let updateCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );

    return {
      ...state,
      cart: updateCart,
    };
  }

  return state;
}

export default CartReducer;
