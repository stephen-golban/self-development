import React, { useEffect, useState } from "react";
// import { produce } from "immer";
// import { Levels } from "./utils";
import { iUserResumeDataLanguages } from "../../../utils/interfaces/resume";
import { generateId } from "../../../utils/localstorage/localStorage";

function Languages(props: any) {
  const [languageData, setLanguageData] = useState<iUserResumeDataLanguages[]>(
    []
  );

  const handleLanguageSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLanguageData((currentLanguage) => [
      ...currentLanguage,
      {
        id: generateId(36),
        language: "Language",
        level: "Select your level",
      },
    ]);
  };

  useEffect(() => {
    setLanguageData(props?.resumeData?.languageData);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const delayDebounceLocal = setTimeout(() => {
      const setData = () => {
        props.setResumeData({
          ...props.resumeData,
          languageData,
        });
      };
      setData();
    }, 100);
    return () => {
      clearTimeout(delayDebounceLocal);
    };
  }, [languageData]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <button
        className="colored__itemDefault colored__bgSecondaryHover"
        onClick={(e) => handleLanguageSubmit(e)}
      >
        {" "}
        Add Language
      </button>
    </>
  );
}

export default Languages;
