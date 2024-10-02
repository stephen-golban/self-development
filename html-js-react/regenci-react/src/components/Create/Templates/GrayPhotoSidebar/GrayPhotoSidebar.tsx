import "./index.css";
import Main from "./Main";
import Sidebar from "./Sidebar";

function GrayPhotoSidebar(props: { componentRef: any; resumeData: any }) {
  return (
    <div className="template__cont" ref={props.componentRef}>
      <div className="template">
        <Sidebar resumeData={props.resumeData} />
        <Main resumeData={props.resumeData} />
      </div>
    </div>
  );
}

export default GrayPhotoSidebar;
