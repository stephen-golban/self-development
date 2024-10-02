import { FC } from "react";
import { message } from "antd";
import { motion } from "framer-motion";
import { signinfields } from "./fields";
import { useDispatch } from "react-redux";
import { signIn } from "../../../api/auth";
import { Link, useHistory } from "react-router-dom";
import AuthForm from "../../../components/Auth/AuthForm";
import { iSignin } from "../../../utils/interfaces/authForm";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../../utils/localstorage/localStorage";
import { dispatchLogin } from "../../../store/actions/auth/auth";

const Signin: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = async (values: iSignin) => {
    try {
      const res = await signIn(values);
      setLocalStorage("login", true);
      message.success(res.data.message);
      dispatch(dispatchLogin());
      getLocalStorage("selected-template") && history.goBack();
    } catch (err) {
      message.error(err?.response?.data?.message);
    }
  };
  return (
    <motion.div
      className="actual__auth"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6, delay: 0 }}
    >
      <AuthForm
        btnText="Sign in"
        fields={signinfields}
        onFinish={onFinish}
        question={true}
        noSignForm={false}
      />
      <div className="w-500px">
        New here? -{" "}
        <Link to="/auth/sign-up" className="question">
          Sign up
        </Link>
      </div>
    </motion.div>
  );
};

export default Signin;
