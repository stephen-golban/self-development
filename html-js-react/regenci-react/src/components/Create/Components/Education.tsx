import React, { useEffect, useState } from "react";
import { iUserResumeDataEducation } from "../../../utils/interfaces/resume";
import { generateId } from "../../../utils/localstorage/localStorage";
// import { produce } from "immer";

function Education(props: any) {
  const [educationData, setEducationData] = useState<iUserResumeDataEducation[]>([]);

  const handleEducationSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setEducationData((currentEducation) => [
      ...currentEducation,
      {
        id: generateId(36),
        sn: "School",
        sc: "",
        sd: "",
        ed: "",
        deg: "",
        d: "",
      },
    ]);
  };

  useEffect(() => {
    setEducationData(props?.resumeData?.educationData);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const delayDebounceLocal = setTimeout(() => {
      const setData = () => {
        props.setResumeData({
          ...props.resumeData,
          educationData,
        });
      };
      setData();
    }, 100);
    return () => {
      clearTimeout(delayDebounceLocal);
    };
  }, [educationData]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
     
      <button
        className="colored__itemDefault colored__bgSecondaryHover"
        onClick={(e) => handleEducationSubmit(e)}
      >
        {" "}
         Add Education
      </button>
    </>
  );
}

export default Education;
