import Employment from "../Employment";

const EmploymentSection = (props: any) => {
  return (
    <>
      <h2 className="h2 colored__itemDefault" style={{ marginTop: "50px" }}>
        Employment History
      </h2>
      <p>
        If relevant, include your most recent educational achievements and the
        dates here
      </p>
      <Employment
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
    </>
  );
};

export default EmploymentSection;
