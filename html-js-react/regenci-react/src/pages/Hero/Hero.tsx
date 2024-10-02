import { FC } from "react";
import Sphere from "./Sphere";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: FC = () => {
  return (
    <motion.div
      className="actual__hero"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6, delay: 0 }}
    >
      <div className="hero__content">
        <div className="text">
          <motion.h1
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Regenci
          </motion.h1>
          <motion.em
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            “Build something 100 people love, not something 1 million people
            kind of like.” [Brian Chesky]
          </motion.em>
        </div>
        <motion.div
          className="button__wrapper global__defaultButton"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <Link to="/templates">
            <span>Get started</span>
          </Link>
        </motion.div>
      </div>
      <Sphere />
    </motion.div>
  );
};

export default Hero;
