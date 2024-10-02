
import Education from "../Education";

const EducationSection = (props: any) => {
  return (
    <>
      <h2 className="h2 colored__itemDefault" style={{ marginTop: "50px" }}>
        
        Education History
      </h2>
      <p>
        Include your last 10 years of relevant experience and dates in this
        section. List your most recent position first.
      </p>
      <Education
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
    </>
  );
};

export default EducationSection;
