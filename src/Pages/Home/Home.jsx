import CoffeeList from "./CoffeeList";
import Header from "./Header";
import { useState, useEffect } from "react";
//import coffee images
import CoffeeImages from "../../Components/Coffee";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulating data loading
    setImages(CoffeeImages);
  }, []);

  return (
    <>
      <Header />
      <CoffeeList images={images} />
    </>
  );
};

export default Home;
