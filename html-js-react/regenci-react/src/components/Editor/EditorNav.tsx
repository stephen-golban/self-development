import { useRef } from "react";
import { useHistory } from "react-router";
import ReactToPrint from "react-to-print";

const EditorNav = () => {
  const componentRef = useRef();
  const history = useHistory();
  return (
    <div className="editor__nav ">
      <div className="go__back themed__itemDefault" onClick={() => history.goBack()}>
 <span>Back to creator</span>
      </div>
      <ReactToPrint
        trigger={() => (
          <button className="print__button colored__bgDefault colored__boxShadow ">
            Download PDF
          </button>
        )}
        content={() => componentRef.current as any}
      />
    </div>
  );
};

export default EditorNav;
