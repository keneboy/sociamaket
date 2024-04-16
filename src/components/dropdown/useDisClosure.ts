import { useState } from "react";

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return {
    isOpen,
    onToggle,
  };
};

export default useDisclosure;
