import { LockOutlined } from "@ant-design/icons";

export const resetFields = [
  {
    id: 1,
    type: "password",
    name: "newPassword",
    placeholder: "New password",
    icon: LockOutlined,
    dependencies: "",
    rules: [
      {
        required: true,
        message:
          "The new password field is required. Please complete the field.",
      },
      {
        min: 5,
        message: "Your new password must be at least 5 characters long",
      },
    ],
  },
  {
    id: 2,
    type: "password",
    name: "repeatPassword",
    placeholder: "Confirm new password",
    icon: LockOutlined,
    dependencies: "newPassword",
    rules: [
      {
        required: true,
        message:
          "The confirm new password field is required. Please complete the field.",
      },
      ({ getFieldValue }: any) => ({
        validator(_: any, value: any) {
          if (!value || getFieldValue("newPassword") === value) {
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
