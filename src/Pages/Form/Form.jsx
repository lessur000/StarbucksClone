import { useState } from "react";
import Header from "../Home/Header";
import Login from "./Login";
import Signup from "./Signup";

const Form = () => {
  const [show, setShow] = useState(true);

  const toggleForm = () => {
    setShow(!show);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-10 rounded-md space-y-5 relative overflow-hidden w-full max-w-sm">
          <div
            className={`transition-all duration-500 ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            {show && (
              <div className="">
                <Login toggleform={toggleForm} />
              </div>
            )}
          </div>
          {/* Signup Form */}
          <div
            className={`transition-all duration-500 ${
              show ? "opacity-0" : "opacity-100"
            }`}
          >
            {!show && (
              <div className="">
                {/* toggleform is a prop being passed to the Signup component.
                    The value of the toggleform prop is the toggleForm function defined in the Form component. */}
                <Signup toggleform={toggleForm} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
