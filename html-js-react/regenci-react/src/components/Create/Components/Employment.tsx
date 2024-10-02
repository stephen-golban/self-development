import React, { useEffect, useState } from "react";
import { iUserResumeDataEmployment } from "../../../utils/interfaces/resume";
import { generateId } from "../../../utils/localstorage/localStorage";
// import { produce } from "immer";

function Employment(props: any) {
  const [employmentData, setEmploymentData] = useState<iUserResumeDataEmployment[]>([]);

  const handleEmploymentSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setEmploymentData((currentEmployment) => [
      ...currentEmployment,
      {
        id: generateId(36),
        ej: "Employment",
        employer: "",
        esd: "",
        eed: "",
        ec: "",
        d: "",
      },
    ]);
  };

  useEffect(() => {
    setEmploymentData(props?.resumeData?.employmentData);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const delayDebounceLocal = setTimeout(() => {
      const setData = () => {
        props.setResumeData({
          ...props.resumeData,
          employmentData,
        });
      };
      setData();
    }, 100);
    return () => {
      clearTimeout(delayDebounceLocal);
    };
  }, [employmentData]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
     
      <button
        className="colored__itemDefault colored__bgSecondaryHover"
        onClick={(e) => handleEmploymentSubmit(e)}
      >
        {" "} Add Employment
      </button>
    </>
  );
}

export default Employment;
