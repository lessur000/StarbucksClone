import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import SidebarMenubar from "../Components/Cart/SidebarMenubar";
import Login from "../Pages/Form/Login";
import Signup from "../Pages/Form/Signup";
import Form from "../Pages/Form/Form";
import CoffeeDetails from "../Pages/Home/CoffeeDetails";
import coffeeImages from "../Components/Coffee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Form" element={<Form />}>
          <Route path="Login" element={<Login />}></Route>
        </Route>
        <Route path="/Details/:id" element={<CoffeeDetails  images={coffeeImages}/>}></Route>
      </Routes>
      <SidebarMenubar />
    </Router>
  );
}

export default App;
