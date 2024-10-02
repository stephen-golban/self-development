import { FC } from "react";
import { message } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { forgotFields } from "./fields";
import { forgotPassword } from "../../../api/auth";
import AuthForm from "../../../components/Auth/AuthForm";

const Forgot: FC = () => {
  const onFinish = async (values: string) => {
    try {
      const res = await forgotPassword(values);
      message.success(res?.data?.message);
    } catch (err) {
      message.error(err?.response?.data?.message);
    }
  };
  return (
    <motion.div
      className="actual__auth"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6, delay: 0 }}
    >
      <AuthForm
        btnText="Recover Account"
        fields={forgotFields}
        onFinish={onFinish}
        question={false}
        noSignForm={true}
      />
      <div className="mt-1">
        Remember your password ? —{" "}
        <Link to="/auth/sign-in" className="question">
          Sign in
        </Link>
      </div>
    </motion.div>
  );
};

export default Forgot;
