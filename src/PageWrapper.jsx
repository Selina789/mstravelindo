// components/PageWrapper.jsx
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 30,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -20,
    filter: "blur(3px)",
  },
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} // cubic easing
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
