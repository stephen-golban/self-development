import ReactTagInput from "@pathofdev/react-tag-input";
import { useEffect, useState } from "react";

const ExtrasSection = (props: any) => {
  const [tags, setTags] = useState<any | []>([]);

  useEffect(() => {
    setTags(props?.resumeData?.extraActivities);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // const handleExtraActivitiesRemover = () => {
  //   props.setExtraCurricToggler(false);
  //   setTags([]);
  // };
  useEffect(() => {
    props.setResumeData({
      ...props.resumeData,
      extraActivities: tags,
    });
  }, [tags]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {props.extraCurricToggler ? (
        <div>
          <h2 className="h2 colored__itemDefault" style={{ marginTop: "50px" }}>
          </h2>
          <p>You can add your extra-curricular activities down below</p>
          <ReactTagInput
            tags={tags}
            editable={true}
            maxTags={20}
            placeholder="Enter your skills and press enter"
            onChange={(newTags) => {
              setTags(newTags);
            }}
          />
        </div>
      ) : null}
    </>
  );
};

export default ExtrasSection;
