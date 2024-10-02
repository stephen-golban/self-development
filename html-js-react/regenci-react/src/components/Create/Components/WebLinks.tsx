import React, { useEffect, useState } from "react";
import { iUserResumeDataLinks } from "../../../utils/interfaces/resume";
import { generateId } from "../../../utils/localstorage/localStorage";
// import { produce } from "immer";

function WebLinks(props: any) {
  const [webLinkData, setWebLinkData] = useState<iUserResumeDataLinks[]>([]);

  const handleWebLinkSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setWebLinkData((currentWebLink) => [
      ...currentWebLink,
      {
        id: generateId(36),
        lbl: "Label",
        link: "",
      },
    ]);
  };

  useEffect(() => {
    setWebLinkData(props?.resumeData?.webLinkData);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const delayDebounceLocal = setTimeout(() => {
      const setData = () => {
        props.setResumeData({
          ...props.resumeData,
          webLinkData,
        });
      };
      setData();
    }, 100);
    return () => {
      clearTimeout(delayDebounceLocal);
    };
  }, [webLinkData]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <button
        className="colored__itemDefault colored__bgSecondaryHover"
        onClick={(e) => handleWebLinkSubmit(e)}
      >
        Add Link
      </button>
    </>
  );
}

export default WebLinks;
