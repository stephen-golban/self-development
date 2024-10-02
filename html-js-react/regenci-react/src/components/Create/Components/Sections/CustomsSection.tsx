import CustomSection from "../CustomSection";

const CustomsSection = (props: any) => {
  // const handleCustomSectionRemover = () => {
  //   props.setCustomToggler(false);
  //   props.setResumeData({
  //     ...props.resumeData,
  //     customSectionData: [],
  //   });
  // };
  return (
    <>
      {props.customToggler ? (
        <div>
          <h2 className="h2 colored__itemDefault" style={{ marginTop: "50px" }}>
          </h2>
          <p>
            You can add your internships, taken courses and other activities you
            want hiring managers to see!
          </p>
          <CustomSection
            setResumeData={props.setResumeData}
            resumeData={props.resumeData}
          />
        </div>
      ) : null}
    </>
  );
};

export default CustomsSection;
