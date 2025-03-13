import Logo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import { MdMenuOpen, MdAccountCircle } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

import { useContext, useState } from "react";
import { SidebarContext } from "../../Components/Context/SidebarContext";
import { CartContext } from "../../Components/Context/CartContext";

const Header = () => {
  //handle nav
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  //openstate
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  //cart state
  const { itemAmount } = useContext(CartContext);

  //account state
  const [account, setAccount] = useState(false);
  const handleAccount = () => {
    setAccount(!account);
  };

  // useEffect(() => {
  //   if (nav) {
  //     document.body.classList.add("bg-gray-500");
  //   } else {
  //     document.body.classList.remove("bg-gray-500");
  //   }
  // }, [nav]);

  return (
    <header className="container mx-auto py-3 flex items-center justify-between  bg-[#06402b]">
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="starbucks" className="h-auto w-[100px]" />
        </Link>
        <div className="hidden sm:block">
          <nav>
            <ul className="flex gap-5 text-green-500 font-semibold text-xl md:text-2xl cursor-coffee">
              <Link to="/">Menu</Link>
              <Link to="/">Merchandise</Link>
              <Link to="/">Rewards</Link>
            </ul>
          </nav>
        </div>
      </div>

      {/* Account Icon/ Button (Always Visible) */}
      <div className="hidden sm:flex items-center gap-5">
        <div>
          <MdAccountCircle
            size={40}
            className="fill-green-500"
            onClick={handleAccount}
          />
          {account && (
            <div className="absolute bg-white shadow-md p-4 rounded-lg z-10 w-[100px] text-center">
              <Link to={"/Form"}>Log in</Link>
            </div>
          )}
        </div>
       <div className="relative">
       <CiShoppingCart
          size={40}
          onClick={() => setIsOpen(!isOpen)}
          className="fill-green-500"
        />
        <span className="bg-red-500 rounded-full absolute top-0 -right-2 w-[18px] text-white text-center ">
          {itemAmount}
        </span>
       </div>
        <button className="bg-[#009563] text-white hover:text-green-400 rounded-3xl py-2 px-4">
          Join Now
        </button>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="sm:hidden z-20 flex items-center">
        <div className="relative md:hidden">
          <CiShoppingCart
            size={40}
            onClick={() => setIsOpen(!isOpen)}
            className="fill-green"
          />
          <span className="bg-red-500 rounded-full absolute top-0 -right-1 w-[18px]  text-white text-center">
            {itemAmount}
          </span>
        </div>
        {nav ? (
          <IoMdClose size={40} onClick={handleNav} />
        ) : (
          <MdMenuOpen size={40} onClick={handleNav} />
        )}
        {nav && (
          <div className="bg-[#D4E9E2] fixed right-0 top-25 w-[200px] h-full">
            <div className="p-5 space-y-5">
              <nav>
                <ul className="flex flex-col gap-5 font-semibold text-xl">
                  <Link>Menu</Link>
                  <Link>Merchandise</Link>
                  <Link>Rewards</Link>
                </ul>
              </nav>

              <button className="bg-[#009563] text-white hover:text-green-400 rounded-3xl py-2 px-4">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
