import { createContext, useContext, useReducer } from "react";

const CartContext = createContext({
  showCart: false,
  cartItems: [],
});

const removeFromCart = (items, unwantedSlug) => {
  return items.filter((item) => item.slug.current !== unwantedSlug);
};

const addItems = (cart, product, quantity) => {
  const itemIndex = cart.findIndex(
    (item) => item.slug === product.slug.current
  );

  if (itemIndex === -1)
    return [
      ...cart,
      {
        slug: product.slug.current,
        name: product.name,
        price: product.price,
        quantity,
      },
    ];
  else {
    cart[itemIndex].quantity += quantity;
    return cart;
  }
};

const decreaseItems = (cart, product) => {
  const itemIndex = cart.findIndex(
    (item) => item.slug === product.slug.current
  );

  if (cart[itemIndex].quantity === 1) return cart;
  else {
    cart[itemIndex].quantity--;
    return cart;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, showCart: !state.showCart };
    case "REMOVE":
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.payload.slug),
      };
    case "ADD":
      return {
        ...state,
        cartItems: addItems(
          state.cartItems,
          action.payload.product,
          action.payload.quantity
        ),
      };
    case "DECREASE":
      return {
        ...state,
        cartItems: decreaseItems(state.cartItems, action.payload.product),
      };
    default:
      throw new Error();
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    showCart: false,
    cartItems: [],
  });

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        toggleCart: () => dispatch({ type: "TOGGLE_CART" }),
        cartItems: state.cartItems,
        removeItem: (slug) => dispatch({ type: "REMOVE", slug }),
        decreaseQuantity: (product) => dispatch({ type: "DECREASE", product }),
        increaseQuantity: (product, quantity) =>
          dispatch({ type: "ADD", product, quantity }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
