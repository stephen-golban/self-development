import { useRef } from "react";
// import GrayPhotoSidebar from "./Templates/GrayPhotoSidebar/GrayPhotoSidebar";
import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";
import { Progress, Tooltip } from "antd";

const Template = (props: any) => {
  const componentRef = useRef();

  return (
    <div className="create__templateContainer">
      <div className="top__actions">
        <div className="sync__iconContainer">
          {props.isSyncing ? (
            <Progress percent={100} status="active" />
          ) : (
            <div>Loading</div>
          )}
          <span>{props.isSyncing ? "Saving..." : "Saved"}</span>
        </div>
      </div>
      {/* <GrayPhotoSidebar
        resumeData={props.resumeData}
        componentRef={componentRef}
      /> */}
      <iframe
        src="https://codesandbox.io/embed/clever-gauss-wszof?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"
        style={{
          width: "100%",
          height: "500px",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="clever-gauss-wszof"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
      <div className="bottom__actions">
        <Tooltip title="Choose other templates">
          <Link to="/app/select-template" className="select__templatesButton ">
            Select Template
          </Link>
        </Tooltip>
        <ReactToPrint
          trigger={() => (
            <button className="print__button colored__bgDefault colored__boxShadow ">
              Download as PDF
            </button>
          )}
          content={() => componentRef.current as any}
        />
      </div>
    </div>
  );
};

export default Template;
