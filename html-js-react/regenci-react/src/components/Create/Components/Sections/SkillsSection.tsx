import { useEffect, useState } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const SkillsSection = (props: any) => {
  const [tags, setTags] = useState<any | []>([]);

  useEffect(() => {
    setTags(props?.resumeData?.skills ? props?.resumeData?.skills : []);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    props.setResumeData({
      ...props.resumeData,
      skills: tags,
    });
  }, [tags]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h2 className="h2 colored__itemDefault" style={{ marginTop: "50px" }}>
        Skills
      </h2>
      <ReactTagInput
        tags={tags}
        editable={true}
        maxTags={20}
        placeholder="Enter your skills and press enter"
        onChange={(newTags) => {
          setTags(newTags);
        }}
      />
    </>
  );
};

export default SkillsSection;
