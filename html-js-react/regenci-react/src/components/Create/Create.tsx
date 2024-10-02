import { useEffect, useState } from "react";
import Info from "./Info";
import Template from "./Template";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { updateUserResume } from "../../api/users";
import "../../assets/css/Create/create.css";
import { Tooltip } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import {
  delayDebouncedFunction,
  delayDebouncedFunctionWithRes,
} from "../../utils/functions/functions";
import {
  dispatchUpdateUserResume,
  updateUserCurrentTemplate,
} from "../../store/actions/user/user";
import { iRootState } from "../../utils/interfaces/store";

function Create() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: iRootState) => state?.currentUser);
  const token = useSelector((state: iRootState) => state?.token);
  const [resumeData, setResumeData] = useState(currentUser?.resumeData);

  const [show, setShow] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [previewButton, setPreviewButton] = useState(false);

  useEffect(() => {
    setResumeData(currentUser?.resumeData);
  }, [currentUser?.resumeData]);

  useEffect(() => {
    if (resumeData) {
      delayDebouncedFunctionWithRes(
        2000,
        updateUserResume,
        dispatch,
        dispatchUpdateUserResume,
        resumeData,
        token
      );
      setIsSyncing(false);
    }
    return () => {
      setIsSyncing(true);
    };
  }, [resumeData, token, dispatch]);

  // media queries
  const isPortable = useMediaQuery({ query: "(max-width: 1350px)" });
  useEffect(() => {
    if (isPortable) {
      setShow(false);
    }
    return () => setShow(true);
  }, [isPortable]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setPreviewButton(true);
      } else {
        setPreviewButton(false);
      }
    });
  }, []);

  const spanStyle = {
    position: "absolute" as any,
    right: previewButton ? "-200px" : "50px",
    opacity: previewButton ? "0" : "1",
    transition: ".5s",
  };

  return (
    <div className="create themed__bgSecondary scroll__topPosition">
      <div className="container">
        <Info resumeData={resumeData} setResumeData={setResumeData} />
        <Template
          resumeData={resumeData}
          setResumeData={setResumeData}
          isSyncing={isSyncing}
        />
        <Tooltip title="Close Editor">
          <Link
            to="/app/templates"
            className="closeTemplate__button"
            onClick={() =>
              delayDebouncedFunction(
                100,
                updateUserCurrentTemplate,
                null,
                token
              )
            }
          >
            <CloseOutlined />
          </Link>
        </Tooltip>
        {!show && (
          <Tooltip title="Preview and Download">
            <Link
              to="/app/editor"
              className="colored__bgDefault colored__boxShadow down__prevButton"
              style={{ width: previewButton ? "60px" : "270px" }}
            >
              <span style={spanStyle}>Preview and Download</span>{" "}
            </Link>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

export default Create;
