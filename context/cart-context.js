import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const removeFromCart = (cart, unwantedSlug) => {
  return cart.filter((item) => item.slug !== unwantedSlug);
};

const addItems = (cart, product, quantity) => {
  const itemIndex = cart.findIndex((item) => item.slug === product.slug);

  if (itemIndex === -1)
    return [
      ...cart,
      {
        slug: product.slug,
        name: product.name,
        price: product.price,
        pic: product.pic,
        quantity,
      },
    ];
  else {
    return cart.map((item) =>
      item.slug === product.slug
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }
};

const decreaseItems = (cart, slug) => {
  const itemIndex = cart.findIndex((item) => item.slug === slug);

  if (cart[itemIndex].quantity === 1) return cart;
  else {
    return cart.map((item) =>
      item.slug === slug ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
};

const increaseItems = (cart, slug) => {
  return cart.map((item) =>
    item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
  );
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
        cartItems: decreaseItems(state.cartItems, action.payload.slug),
      };
    case "INCREASE":
      return {
        ...state,
        cartItems: increaseItems(state.cartItems, action.payload.slug),
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
        removeItem: (slug) => dispatch({ type: "REMOVE", payload: { slug } }),
        decreaseQuantity: (slug) =>
          dispatch({ type: "DECREASE", payload: { slug } }),
        increaseQuantity: (slug) =>
          dispatch({ type: "INCREASE", payload: { slug } }),
        addItems: (product, quantity) =>
          dispatch({ type: "ADD", payload: { product, quantity } }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
