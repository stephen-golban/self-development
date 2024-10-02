import { useEffect } from "react";
import { motion } from "framer-motion";
import { message, notification } from "antd";
import { activate } from "../../../api/auth";
import { useHistory, useParams } from "react-router-dom";
import ActivateImg from "../../../assets/images/inbox-cleanup.svg";

const Activation = () => {
  const history = useHistory();
  const { token } = useParams<Record<string, string | undefined>>();

  useEffect(() => {
    if (token) {
      const activationEmail = async () => {
        try {
          const res = await activate(token);
          notification.success({
            message: "Activation Notification",
            description: res?.data?.message,
            placement: "bottomRight",
          });
          setTimeout(() => {
            history.push("/auth/sign-in");
          }, 1200);
        } catch (err) {
          message.error(err?.response?.data?.message);
        }
      };
      activationEmail();
    }
  }, [token, history]);

  return (
    <motion.div
      className="actual__auth"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.6, delay: 0 }}
    >
      <h1>Account activation</h1>
      <img src={ActivateImg} alt="activate svg" width="700px" />
    </motion.div>
  );
};

export default Activation;
