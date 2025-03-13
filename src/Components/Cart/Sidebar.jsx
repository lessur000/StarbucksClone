import { useState } from "react";
import { SidebarContext } from "../../Components/Context/SidebarContext";

const SidebarProvider = ({ children }) => {
  //sidebar State
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
