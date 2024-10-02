import { LockOutlined, UserOutlined } from "@ant-design/icons";

export const signinfields = [
  {
    id: 1,
    type: "text",
    name: "email",
    placeholder: "Email",
    icon: UserOutlined,
    dependencies: "",
    rules: [
      {
        required: true,
        message: "The email field is required. Please complete the field.",
      },
      {
        type: "email",
        message:
          "Please enter your email address in format: yourname@example.com",
      },
    ],
  },
  {
    id: 2,
    type: "password",
    name: "password",
    placeholder: "Password",
    dependencies: "",
    icon: LockOutlined,
    rules: [
      {
        required: true,
        message: "The password field is required. Please complete the field.",
      },
      {
        min: 5,
        message: "Your password must be at least 5 characters long",
      },
    ],
  },
];
