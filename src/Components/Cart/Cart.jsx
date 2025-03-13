import { CartContext } from "../Context/CartContext";
import { useEffect, useState } from "react";

const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);
  //item amount state
  const [itemAmount, setItemAmount] = useState(0);
  //total state
  const [total, setTotal] = useState(0);

  //add to cart
  const addToCart = (item, id) => {
    const newItem = { ...item, amount: 1 };
    console.log(newItem);
    const cartItem = cart.find((item) => item.id === id);
    console.log(cartItem);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      //if product doesnt exist in the cart add it
      setCart([...cart, newItem]);
    }
  };

  //remove cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  //update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]); //Dependencies

  //update total amount
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]); //Dependencies

  //remove total amount
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
