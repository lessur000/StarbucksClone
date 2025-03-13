import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useContext } from "react";
import { CartContext } from "../../Components/Context/CartContext";
import { Link } from "react-router-dom";

const CoffeeList = ({ images }) => {
  const { addToCart } = useContext(CartContext);
  const [hoveredId, setHoveredId] = useState(null);
  

  // React Slick settings
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="pt-[100px]">
      <Slider {...settings}>
        {images.map((coffee) => (
          <div
            key={coffee.id}
            className="relative group  w-auto"
            onMouseEnter={() => setHoveredId(coffee.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              className={`relative transition-all duration-500 rounded-3xl mx-auto overflow-hidden ${
                hoveredId === coffee.id
                  ? "w-[280px] md:w-auto  h-auto bg-green-800 p-6 flex flex-col items-center"
                  : "w-[200px] h-auto bg-white"
              }`}
            >
              {/* Centered Image */}
              <img
                src={coffee.image}
                alt={coffee.name}
                className={`transition-all duration-500 object-cover ${
                  hoveredId === coffee.id
                    ? "h-[250px] w-[250px] mx-auto"
                    : "h-[150px] w-[150px] mx-auto"
                }`}
              />

              {/* Details Section */}
              {hoveredId === coffee.id && (
                <div className="text-white text-center mt-4">
                  <h2 className="text-2xl font-bold">{coffee.name}</h2>
                  <p className="text-sm mt-2">{coffee.description}</p>
                  <p className="mt-3 font-bold text-lg">Calories</p>

                  {/* Buttons */}
                  <div className="mt-4 flex justify-center gap-4">
                    <Link to={`/Details/${coffee.id}`}>
                      <button className="bg-white text-green-800 px-4 py-2 rounded-xl cursor-pointer">
                        Details
                      </button>
                    </Link>
                    <button
                      className="bg-yellow-500 text-white px-4 py-2 rounded-xl cursor-pointer"
                      onClick={() => addToCart(coffee, coffee.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Name under card */}
            <p className="text-center font-semibold text-lg text-[#8def80] mt-2">
              {coffee.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoffeeList;
