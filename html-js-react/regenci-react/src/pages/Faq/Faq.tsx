import { motion } from "framer-motion";
import { QuestionCircleOutlined } from "@ant-design/icons";

const Faq = () => {
  return (
    <div className="faq">
      <motion.div
        className="actual__faq"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.6, delay: 0 }}
      >
        <QuestionCircleOutlined /> FAQ PAGE
      </motion.div>
    </div>
  );
};

export default Faq;
