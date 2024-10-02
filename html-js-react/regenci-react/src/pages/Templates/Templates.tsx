import { FC } from "react";
import { Popover } from "antd";
import { motion } from "framer-motion";
import Container from "./components/Container";
import { QuestionCircleOutlined } from "@ant-design/icons";

const Templates: FC = () => {
  const content = (
    <ul>
      <li>Double click a template to select it</li>
      <li>Long click a template to deselect it</li>
      <li>Click a template to scroll to it</li>
    </ul>
  );

  return (
    <div className="templates">
      <motion.div
        className="actual__templates"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6, delay: 0 }}
      >
        <div className="text">
          <motion.h1
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Choose a template to get started.
          </motion.h1>
          <motion.p
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            How to select
            <Popover
              placement="bottom"
              title="How to use the cover flow"
              content={content}
            >
              <QuestionCircleOutlined />
            </Popover>
          </motion.p>
        </div>
        {/* <Container /> */}
      </motion.div>
    </div>
  );
};

export default Templates;
