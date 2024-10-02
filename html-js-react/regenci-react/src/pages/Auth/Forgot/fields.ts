import { UserOutlined } from "@ant-design/icons";

export const forgotFields = [
  {
    id:1,
    type: "text",
    name: "email",
    placeholder: "Email",
    icon: UserOutlined,
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
];
