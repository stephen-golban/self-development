import React, { useEffect, useState } from "react";
import { generateId } from "../../../utils/localstorage/localStorage";
// import { produce } from "immer";
import { iUserResumeDataCustom } from "../../../utils/interfaces/resume";

function CustomSection(props: any) {
  const [customSectionData, setCustomSectionData] = useState<
    iUserResumeDataCustom[]
  >([]);

  const handleCustomSectionSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setCustomSectionData((currentCustomSection) => [
      ...currentCustomSection,
      {
        id: generateId(36),
        c1: "Custom Section",
        c2: "",
        c3: "",
        c4: "",
        c5: "",
      },
    ]);
  };

  useEffect(() => {
    setCustomSectionData(props?.resumeData?.customSectionData);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const delayDebounceLocal = setTimeout(() => {
      const setData = () => {
        props.setResumeData({
          ...props.resumeData,
          customSectionData,
        });
      };
      setData();
    }, 100);
    return () => {
      clearTimeout(delayDebounceLocal);
    };
  }, [customSectionData]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <button
        className="colored__itemDefault colored__bgSecondaryHover"
        onClick={(e) => handleCustomSectionSubmit(e)}
      >
        {" "}
        Add Custom Section
      </button>
    </>
  );
}

export default CustomSection;
