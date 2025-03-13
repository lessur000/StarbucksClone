import Caramel from "../assets/Images/Coffee/Caramel.png";
import Chai from "../assets/Images/Coffee/Chai.png";
import Kape from "../assets/Images/Coffee/Coffee.png";
import Chip from "../assets/Images/Coffee/DoubleChocolateChip.png";
import Tea from "../assets/Images/Coffee/GreenTea.png";
import Mocha from "../assets/Images/Coffee/Mocha.png";

const coffeeImages = [
  {
    id: 1,
    name: "Caramel",
    image: Caramel,
    description:
      "caramel is a buttery, smooth flavor that's made with caramel sauce, syrup, or cream",
    price: 150,
  },
  {
    id: 2,
    name: "Chai",
    image: Chai,
    description:
      "chai is black tea infused with spices like cinnamon and clove, combined with milk, and sometimes sweetened.",
    price: 120,
  },
  {
    id: 3,
    name: "Coffee",
    image: Kape,
    description:
      "It offers a refreshing pick-me-up with a chilled blend of bold espresso and creamy milk",
    price: 130,
  },
  {
    id: 4,
    name: "Chip",
    image: Chip,
    description:
      "chocolate chip drinks and treats, including Frappuccinos, cookies, and a chocolate chip cookie recipe. ",
    price: 140,
  },
  {
    id: 5,
    name: "Tea",
    image: Tea,
    description:
      "green tea drinks, including iced green tea, green tea latte, and matcha latte. ",
    price: 90,
  },
  {
    id: 6,
    name: "Mocha",
    image: Mocha,
    description:
      "Mocha is a coffee drink that combines espresso, chocolate, steamed milk, and whipped cream",
    price: 160,
  },
];

export default coffeeImages; // Exporting only the images
