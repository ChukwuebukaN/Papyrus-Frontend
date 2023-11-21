import React from "react";
import { motion } from "framer-motion";

type BackdropProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const Backdrop: React.FC<BackdropProps> = (props): JSX.Element => {
  const { children, onClick } = props;

  return (
    <div className="inset-0 fixed">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClick}
        className="absolute left-0 top-0 inset-0 h-screen w-screen flex items-center justify-center bg-opacity-60 bg-neutral-700 "
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Backdrop;
