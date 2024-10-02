import {
  EyeInvisibleOutlined,
  EyeOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Tooltip } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { iAuthForm, iAuthFormFields } from "../../utils/interfaces/authForm";

const AuthForm: FC<iAuthForm> = ({
  btnText,
  fields,
  onFinish,
  question,
  noSignForm,
}) => {
  return (
    <div className="auth">
      <Form name="normal_login" onFinish={(values) => onFinish(values)}>
        <h1>{btnText}</h1>
        {noSignForm && (
          <p>
            Please enter your email address. You will receive a link to create a
            new password via email.
          </p>
        )}
        {fields?.map((field: iAuthFormFields) => (
          <Form.Item
            key={field?.id}
            name={field.name}
            rules={field?.rules.map((r: any) => r)}
            className="mb-1"
            dependencies={[
              field?.dependencies !== "" ? field.dependencies : "",
            ]}
          >
            {field.type === "text" ? (
              <Input
                type={field.type}
                prefix={<field.icon />}
                placeholder={field.placeholder}
              />
            ) : field.type === "password" ? (
              <Input.Password
                prefix={<field.icon />}
                type={field.type}
                iconRender={(visible) =>
                  visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
                placeholder={field.placeholder}
              />
            ) : null}
          </Form.Item>
        ))}
        {question && (
          <Link to="/auth/forgot-password" className="forget">
            Forgot password
          </Link>
        )}
        <Button
          type="primary"
          htmlType="submit"
          className="submit__button w-100 mt-1"
        >
          {btnText}
        </Button>
      </Form>
      {!noSignForm && (
        <>
          <h2 className="text-center mt-05 mb-05">
            Or <span style={{ textTransform: "lowercase" }}>{btnText}</span>{" "}
            with
          </h2>
          <div className="mb-1 mt-1 d-flex align-center w-100 justify-space-between social-signs">
            <Tooltip title="Facebook">
              <Button type="dashed" className="w-100 mr-1">
                <FacebookOutlined />
              </Button>
            </Tooltip>
            <Tooltip title="Google">
              <Button type="dashed" className="w-100 ml-1">
                <GoogleOutlined />
              </Button>
            </Tooltip>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthForm;
