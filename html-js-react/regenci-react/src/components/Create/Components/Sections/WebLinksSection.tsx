import WebLinks from "../WebLinks";

const WebLinksSection = (props: any) => {
  return (
    <>
      <h2 className="h2 colored__itemDefault" style={{ marginTop: "50px" }}>
        Websites & Social Links
      </h2>
      <p>
        You can add links to websites you want hiring managers to see! Perhaps
        It will be a link to your portfolio, LinkedIn profile, or personal
        website
      </p>
      <WebLinks
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
    </>
  );
};

export default WebLinksSection;
