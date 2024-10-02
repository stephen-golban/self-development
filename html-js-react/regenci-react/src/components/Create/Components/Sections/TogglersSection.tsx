
const TogglersSection = (props: any) => {
  return (
    <>
      {props.customToggler &&
      props.extraCurricToggler &&
      props.hobbyToggler ? null : (
        <h2 className="h2 colored__itemDefault" style={{ marginTop: "50px" }}>
          Add Sections
        </h2>
      )}

      {props.customToggler ? null : (
        <div className="sectionButton ">
          <span
            className="colored__itemDefaultHover"
            onClick={() => props.setCustomToggler(true)}
          >
            Custom Section
          </span>
        </div>
      )}

      {props.extraCurricToggler ? null : (
        <div className="sectionButton ">
          <span
            className="colored__itemDefaultHover"
            onClick={() => props.setExtraCurricToggler(true)}
          >
            Extra-curricular Activities
          </span>
        </div>
      )}

      {props.hobbyToggler ? null : (
        <div className="sectionButton ">
          <span
            className="colored__itemDefaultHover"
            onClick={() => props.setHobbyToggler(true)}
          >
            Hobbies
          </span>
        </div>
      )}
    </>
  );
};

export default TogglersSection;
