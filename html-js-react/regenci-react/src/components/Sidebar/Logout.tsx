import { LoginOutlined, PoweroffOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { handleLogout } from "../../utils/functions/functions";
import { iRootState } from "../../utils/interfaces/store";

const Logout: FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const isLogged = useSelector((state: iRootState) => state.isLogged);

  return (
    <div className="logout">
      {isLogged ? (
        <Tooltip title="Logout" placement="right">
          <Link to="#">
            <Button
              icon={<PoweroffOutlined />}
              loading={loading}
              type="text"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  handleLogout(history);
                }, 1500);
              }}
            />
          </Link>
        </Tooltip>
      ) : (
        <Tooltip title="Sign in" placement="right">
          <Link
            to="/auth/sign-in"
            className={`${
              location.pathname.includes("/auth") ? "enlarged__menuItem" : ""
            }`}
          >
            <Button type="text" icon={<LoginOutlined />} />
          </Link>
        </Tooltip>
      )}
    </div>
  );
};

export default Logout;
