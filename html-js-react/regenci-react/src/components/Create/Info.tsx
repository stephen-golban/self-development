import { useEffect, useState } from "react";
import UserDetailsSection from "./Components/Sections/UserDetailsSection";
import EducationSection from "./Components/Sections/EducationSection";
import EmploymentSection from "./Components/Sections/EmploymentSection";
import WebLinksSection from "./Components/Sections/WebLinksSection";
import SkillsSection from "./Components/Sections/SkillsSection";
import LanguagesSection from "./Components/Sections/LanguagesSection";
import CustomsSection from "./Components/Sections/CustomsSection";
import ExtrasSection from "./Components/Sections/ExtrasSection";
import HobbiesSection from "./Components/Sections/HobbiesSection";
import TogglersSection from "./Components/Sections/TogglersSection";

function Info(props: any) {
  const [customToggler, setCustomToggler] = useState(false);
  const [extraCurricToggler, setExtraCurricToggler] = useState(false);
  const [hobbyToggler, setHobbyToggler] = useState(false);

  const resumeData = props.resumeData;

  useEffect(() => {
    if (resumeData?.resumeData?.customSectionData?.length > 0) {
      setCustomToggler(true);
    }
    if (resumeData?.resumeData?.extraActivities?.length > 0) {
      setExtraCurricToggler(true);
    }
    if (resumeData?.resumeData?.hobbies?.length > 0) {
      setHobbyToggler(true);
    }
  }, [resumeData]);

  return (
    <div className="create__infoContainer ">
      <div className="form">
        <h1 className="themed__itemSecondary">
          {resumeData?.firstName ? resumeData?.firstName : "User"}
          's Resume
        </h1>
        {/* Personal Detail Section */}
        <UserDetailsSection
          resumeData={resumeData}
          setResumeData={props.setResumeData}
        />
        {/* Eductaion Section */}
        <EducationSection
          setResumeData={props.setResumeData}
          resumeData={resumeData}
        />

        {/* Employment Section */}
        <EmploymentSection
          setResumeData={props.setResumeData}
          resumeData={resumeData}
        />
        {/* WebLinks Section */}
        <WebLinksSection
          setResumeData={props.setResumeData}
          resumeData={resumeData}
        />

        {/* Skill Section */}
        <SkillsSection
          setResumeData={props.setResumeData}
          resumeData={resumeData}
        />

        {/* Language Section */}
        <LanguagesSection
          setResumeData={props.setResumeData}
          resumeData={resumeData}
        />

        {/* Custom Section */}
        <CustomsSection
          setResumeData={props.setResumeData}
          resumeData={resumeData}
          customToggler={customToggler}
          setCustomToggler={setCustomToggler}
        />
        {/* Extra curricular activities Section */}
        <ExtrasSection
          setResumeData={props.setResumeData}
          resumeData={resumeData}
          extraCurricToggler={extraCurricToggler}
          setExtraCurricToggler={setExtraCurricToggler}
        />
        {/* Hobbies section */}
        <HobbiesSection
          setResumeData={props.setResumeData}
          resumeData={resumeData}
          hobbyToggler={hobbyToggler}
          setHobbyToggler={setHobbyToggler}
        />

        {/* Add More section */}
        <TogglersSection
          customToggler={customToggler}
          setCustomToggler={setCustomToggler}
          extraCurricToggler={extraCurricToggler}
          setExtraCurricToggler={setExtraCurricToggler}
          hobbyToggler={hobbyToggler}
          setHobbyToggler={setHobbyToggler}
        />
      </div>
    </div>
  );
}

export default Info;
