import Header from "./Header";
import coffeeImages from "../../Components/Coffee"; // Import coffee data
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Components/Context/CartContext";

const CoffeeDetails = () => {
  const { id } = useParams(); // Get ID from the URL
  const coffeeId = parseInt(id, 10); // Convert ID to a number if necessary
  const coffee = coffeeImages.find((item) => item.id === coffeeId); // Find the matching coffee
  const { addToCart } = useContext(CartContext);

  // If coffee is not found, show a loading message
  if (!coffee) {
    return (
      <section className="text-black h-screen flex justify-center items-center">
        Loading.....
      </section>
    );
  }

  return (
    <>
      <Header />
      <div className="flex gap-10 items-center mx-auto w-fit mt-20">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-64 h-64 object-cover"
        />
        <div className="text-left space-y-10">
          <h2 className="text-5xl font-bold mt-4 text-white">{coffee.name}</h2>
          <p className="text-green-500 max-w-[500px]">{coffee.description}</p>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-xl cursor-pointer"
            onClick={() => addToCart(coffee, coffee.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CoffeeDetails;
