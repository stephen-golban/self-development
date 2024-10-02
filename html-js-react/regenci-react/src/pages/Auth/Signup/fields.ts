import { LockOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";

export const signupFields = [
  {
    id: 1,
    type: "text",
    name: "firstName",
    placeholder: "First name",
    dependencies: "",
    icon: UserOutlined,
    rules: [
      {
        required: true,
        message: "The first name field is required. Please complete the field.",
      },
      {
        min: 2,
        message: "Your first name should be at least 2 characters long.",
      },
      {
        max: 32,
        message: "Your first name should not be longer than 32 characters",
      },
    ],
  },
  {
    id: 2,
    type: "text",
    name: "lastName",
    placeholder: "Last name",
    dependencies: "",
    icon: UserOutlined,
    rules: [
      {
        required: true,
        message: "The last name field is required. Please complete the field.",
      },
      {
        min: 2,
        message: "Your last name should be at least 2 characters long.",
      },
      {
        max: 32,
        message: "Your last name should not be longer than 32 characters",
      },
    ],
  },
  {
    id: 3,
    type: "text",
    name: "email",
    placeholder: "Email",
    dependencies: "",
    icon: MessageOutlined,
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
    id: 4,
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
  {
    id: 5,
    type: "password",
    name: "repeatPassword",
    placeholder: "Confirm password",
    icon: LockOutlined,
    dependencies: "password",
    rules: [
      {
        required: true,
        message:
          "The confirm password field is required. Please complete the field.",
      },
      ({ getFieldValue }: any) => ({
        validator(_: any, value: any) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error("The two passwords that you entered do not match!")
          );
        },
      }),
    ],
  },
];
