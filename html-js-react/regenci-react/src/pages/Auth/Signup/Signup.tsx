import { message } from "antd";
import { motion } from "framer-motion";
import { signupFields } from "./fields";
import { signUp } from "../../../api/auth";
import { Link, useHistory } from "react-router-dom";
import AuthForm from "../../../components/Auth/AuthForm";
import { iSignup } from "../../../utils/interfaces/authForm";

const Signup = () => {
  const history = useHistory();

  const onFinish = async (values: iSignup) => {
    try {
      const res = await signUp(values);
      message.success(res?.data?.message);
      setTimeout(() => {
        history.go(0);
      }, 1200);
    } catch (err) {
      message.error(err?.response?.data?.message);
    }
  };
  return (
    <motion.div
      className="actual__auth"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.6, delay: 0 }}
    >
      <AuthForm
        btnText="Sign up"
        fields={signupFields}
        onFinish={onFinish}
        question={false}
        noSignForm={false}
      />
      <div className="w-500px">
        One of us? -{" "}
        <Link to="/auth/sign-in" className="question">
          Sign in
        </Link>
      </div>
    </motion.div>
  );
};

export default Signup;
