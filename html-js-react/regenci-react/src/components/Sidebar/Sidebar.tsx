import { FC } from "react";
import { Tooltip } from "antd";
import Logout from "./Logout";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import WhiteLogo from "../../assets/images/regenci-logo-white.svg";
import {
  AppstoreAddOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const Sidebar: FC = () => {
  const location = useLocation();
  const isPortable = useMediaQuery({ query: "(max-width: 770px)" });
  return (
    <motion.div
      className="sidebar"
      initial={isPortable ? { x: "0" } : { y: "-100%" }}
      animate={isPortable ? { x: "0" } : { y: "0" }}
      exit={isPortable ? { x: "0" } : { y: "100%" }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <Tooltip
        title="Homepage"
        placement={`${isPortable ? "top" : "right"}` as any}
        className="logo"
      >
        <img src={WhiteLogo} width="40px" height="30" alt="regenci-logo" />
      </Tooltip>
      <Link
        to="/"
        className={`${location.pathname === "/" ? "enlarged__menuItem" : ""}`}
      >
        <Tooltip
          title="Home"
          placement={`${isPortable ? "top" : "right"}` as any}
        >
          <HomeOutlined />
        </Tooltip>
      </Link>
      <Link
        to="/templates"
        className={`${
          location.pathname === "/templates" ? "enlarged__menuItem" : ""
        }`}
      >
        <Tooltip
          title="Templates"
          placement={`${isPortable ? "top" : "right"}` as any}
        >
          <AppstoreAddOutlined />
        </Tooltip>
      </Link>
      <Link
        to="/faq"
        className={`${
          location.pathname === "/faq" ? "enlarged__menuItem" : ""
        }`}
      >
        <Tooltip
          title="Faq"
          placement={`${isPortable ? "top" : "right"}` as any}
        >
          <QuestionCircleOutlined />
        </Tooltip>
      </Link>
      <Logout />
    </motion.div>
  );
};

export default Sidebar;
