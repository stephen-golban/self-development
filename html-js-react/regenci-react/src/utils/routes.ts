import {
  AppstoreAddOutlined,
  HomeOutlined,
  LoginOutlined,
  QuestionCircleOutlined,
  QuestionOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import Activation from "../pages/Auth/Activation/Activation";
import Forgot from "../pages/Auth/Forgot/Forgot";
import Reset from "../pages/Auth/Reset/Reset";
import Signin from "../pages/Auth/Signin/Signin";
import Signup from "../pages/Auth/Signup/Signup";
import Faq from "../pages/Faq/Faq";
import Hero from "../pages/Hero/Hero";
import Templates from "../pages/Templates/Templates";

export const routes = [
  {
    path: "/account-activation/:token",
    name: "Activate Account",
    icon: RetweetOutlined,
    component: Activation,
    layout: "/auth",
  },
  {
    name: "Reset Password",
    path: "/reset-password/:token",
    icon: RetweetOutlined,
    component: Reset,
    layout: "/auth",
  },
  {
    name: "Forgot Password",
    path: "/forgot-password",
    icon: QuestionOutlined,
    component: Forgot,
    layout: "/auth",
  },
  {
    name: "Sign up",
    path: "/sign-up",
    icon: LoginOutlined,
    component: Signup,
    layout: "/auth",
  },
  {
    name: "Sign in",
    path: "/sign-in",
    icon: LoginOutlined,
    component: Signin,
    layout: "/auth",
  },
  {
    name: "Templates",
    path: "templates",
    icon: AppstoreAddOutlined,
    component: Templates,
    layout: "/",
  },
  {
    name: "FAQ",
    path: "faq",
    icon: QuestionCircleOutlined,
    component: Faq,
    layout: "/",
  },
  {
    name: "Home",
    path: "",
    icon: HomeOutlined,
    component: Hero,
    layout: "/",
  },
];
