import { BsTrash } from "react-icons/bs";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const CartItems = ({ item }) => {
  //destructure items
  const { image, id, name, price, amount } = item;
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)

  return (
    <div className="flex space-y-3 items-center">
      {/* Images */}
      <img src={image} className="max-w-[200px] h-[100px] sm:h-[150px] " />
      {/* Title and remove price */}
      <div className="w-full p-1 space-y-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-black text-xl sm:text-2xl">{name}</p>
          <BsTrash  onClick={() => removeFromCart(id)} className="w-auto h-[30px] hover:fill-red-500"/>
        </div>
        <p className="font-semibold">₱ {price}</p>
        {/* remove & add & amount */}
        <div className="flex items-center justify-between">
          <div className="flex items-center border border-black p-1 px-3 space-x-1">
            <IoMdRemove onClick={() => decreaseAmount(id)}/>
            <p>{amount}</p>
            <IoMdAdd onClick={() => increaseAmount(id)}/>
          </div>
          <p>{price * amount}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
