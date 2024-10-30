function CartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    let { name, title, counter, product } = action.payload;

    let existingProduct = state.cart.find((curItem) => curItem.id === title);

    if (existingProduct) {
      let updateProduct = state.cart.map((curItem) => {
        if (curItem.id === title) {
          let newCounter = curItem.counter + counter;
          return {
            ...curItem,
            counter: newCounter,
          };
        } else {
          return curItem;
        }
      });
      return {
        ...state,
        cart: updateProduct,
      };
    } else {
      let cartProduct = {
        id: title,
        image: product.image,
        name: product.title,
        counter,
        price: product.currentPrice,
        stock: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // setIncrement and setDecrement the product
  if (action.type === "SET_DECREMENT") {
    let updateProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let decCounter = curItem.counter - 1;
        if (decCounter <= 1) {
          decCounter = 1;
        }
        return {
          ...curItem,
          counter: decCounter,
        };
      } else {
        return curItem;
      }
    });
    return { ...state, cart: updateProduct };
  }

  // to remove the individual item from cart
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
