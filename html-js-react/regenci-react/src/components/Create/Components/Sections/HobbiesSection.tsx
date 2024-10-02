import ReactTagInput from "@pathofdev/react-tag-input";
import { useEffect, useState } from "react";

const HobbiesSection = (props: any) => {
  const [tags, setTags] = useState<any | []>([]);

  useEffect(() => {
    setTags(props?.resumeData?.hobbies);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // const handleHobbyRemover = () => {
  //   props.setHobbyToggler(false);
  //   setTags([]);
  // };
  useEffect(() => {
    props.setResumeData({
      ...props.resumeData,
      hobbies: tags,
    });
  }, [tags]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {props.hobbyToggler ? (
        <div>
          <h2 className="h2 colored__itemDefault" style={{ marginTop: "50px" }}>
            Hobbies
          </h2>
          <p>You can add your hobbies down below</p>
          <ReactTagInput
            tags={tags}
            editable={true}
            maxTags={20}
            placeholder="Enter your hobbies and press enter"
            onChange={(newTags) => setTags(newTags)}
          />
        </div>
      ) : null}
    </>
  );
};

export default HobbiesSection;
