import { message } from "antd";
import { motion } from "framer-motion";
import { resetFields } from "./fields";
import { useHistory, useParams } from "react-router";
import { resetPassword } from "../../../api/auth";
import AuthForm from "../../../components/Auth/AuthForm";
import { iReset } from "../../../utils/interfaces/authForm";

const Reset = () => {
  const history = useHistory();
  const { token } = useParams<Record<string, string>>();

  const onFinish = async (values: iReset) => {
    try {
      const res = await resetPassword(values, token);
      message.success(res.data.message);
      history.push("/auth/sign-in");
    } catch (err) {
      message.error(err?.response?.data?.message);
    }
  };
  return (
    <motion.div
      className="actual__auth"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.6, delay: 0 }}
    >
      <AuthForm
        btnText="Reset password"
        fields={resetFields}
        onFinish={onFinish}
        question={false}
        noSignForm={false}
      />
    </motion.div>
  );
};

export default Reset;
