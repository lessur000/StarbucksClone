import { IoMdArrowForward } from "react-icons/io";
import { SidebarContext } from "../Context/SidebarContext";
import { useContext } from "react";
import CartItems from "./CartItems";
import { CartContext } from "../Context/CartContext";
import { BsTrash } from "react-icons/bs";

const SidebarMenubar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, total, clearCart, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-green-700 fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <h1 className="font-semibold text-2xl">Items Cart</h1>
        {/* Icons */}
        <IoMdArrowForward size={40} onClick={handleClose} />
      </div>
      {/* Body */}
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[700px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => (
          <CartItems item={item} key={item.id} />
        ))}
      </div>
      {/* Footer */}

      <div className="mt-10">
        {/* total */}
        <div className="flex items-center justify-between">
          <span className="uppercase">Total:{total}</span>
          <BsTrash
            size={40}
            className="fill-white hover:fill-red-500"
            onClick={clearCart}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarMenubar;
