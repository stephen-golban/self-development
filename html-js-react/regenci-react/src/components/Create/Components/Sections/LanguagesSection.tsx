import Languages from "../Languages";

const LanguagesSection = (props: any) => {
  return (
    <>
      <h2 className="h2 colored__itemDefault" style={{ marginTop: "50px" }}>
        Languages
      </h2>
      <Languages
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
    </>
  );
};

export default LanguagesSection;
