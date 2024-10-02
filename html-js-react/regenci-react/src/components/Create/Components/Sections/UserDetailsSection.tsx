import React, { useState } from "react";
import { Progress } from "antd";

const UserDetailsSection = (props: {
  setResumeData: (arg0: any) => void;
  resumeData: {
    job: string | number | readonly string[] | undefined;
    avatar: string | undefined;
    firstName: string | number | readonly string[] | undefined;
    lastName: string | number | readonly string[] | undefined;
    email: string | number | readonly string[] | undefined;
    phone: string | number | readonly string[] | undefined;
    summary: string | number | readonly string[] | undefined;
  };
}) => {
  const [loadingImg, setLoadingImg] = useState(false);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    props.setResumeData({
      ...props.resumeData,
      [name]: value,
    });
  };

  const handleImg = async (e: { target: { files: any } }) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "regenci");
    setLoadingImg(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/stef703/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    if (file) {
      props.setResumeData({
        ...props.resumeData,
        avatar: file.secure_url,
      });
      setLoadingImg(false);
    }
  };
  return (
    <>
      <h2 className="h2 colored__itemDefault">Personal Details</h2>
      <div className="form__row">
        <div className="form__group">
          <label htmlFor="job-title" className="colored__itemDefault">
            Job Title
          </label>
          <input
            value={props?.resumeData?.job}
            onChange={(e) => handleInputChange(e)}
            type="text"
            name="job"
            autoComplete="off"
            placeholder="e.g. Senior Marketer"
            className="colored__itemDefault colored__bgSecondary colored__boxShadowFocus"
          />
        </div>
        <form encType="multipart/form-data" className="form__row image__input">
          <div className="form__group">
            <div className="resume__photo">
              {!loadingImg && props?.resumeData?.avatar === "" ? (
                <div className="placeholder__container">
                 
                  <label
                    htmlFor="user-image"
                    className="colored__itemDefault"
                    style={{ width: "100%", display: "flex" }}
                  >
                    Upload photo
                  </label>
                </div>
              ) : loadingImg && props?.resumeData?.avatar === "" ? (
                <div>
                  <Progress percent={50} status="active" /> 
                  <span className="colored__itemDefault">Loading...</span>
                </div>
              ) : (
                <div className="photo__cont">
                  <img src={props?.resumeData?.avatar} alt="user resume pic" />
                  <div className="photo__instruments">
                    <label
                      htmlFor="user-image"
                      className="colored__itemDefault"
                    >
                      Upload new
                    </label>
                    <div
                      onClick={() => {
                        setLoadingImg(false);
                        props.setResumeData({
                          ...props.resumeData,
                          avatar: "",
                        });
                      }}
                    >
                      Remove photo
                    </div>
                  </div>
                </div>
              )}
            </div>
            <input
              type="file"
              id="user-image"
              accept=".png, .jpg, .jpeg"
              onChange={handleImg}
              className="colored__itemDefault colored__bgSecondary colored__boxShadowFocus"
            />
          </div>
        </form>
      </div>

      <div className="form__row">
        <div className="form__group">
          <label htmlFor="first-name" className="colored__itemDefault">
            First Name
          </label>
          <input
            value={props?.resumeData?.firstName}
            onChange={(e) => handleInputChange(e)}
            type="text"
            id="first-name"
            name="firstName"
            autoComplete="off"
            placeholder="e.g. John"
            className="colored__itemDefault colored__bgSecondary colored__boxShadowFocus"
          />
        </div>
        <div className="form__group">
          <label htmlFor="last-name" className="colored__itemDefault">
            Last Name
          </label>
          <input
            value={props?.resumeData?.lastName}
            onChange={(e) => handleInputChange(e)}
            type="text"
            id="last-name"
            name="lastName"
            autoComplete="off"
            placeholder="e.g. Doe"
            className="colored__itemDefault colored__bgSecondary colored__boxShadowFocus"
          />
        </div>
      </div>

      <div className="form__row">
        <div className="form__group">
          <label htmlFor="user-email" className="colored__itemDefault">
            Email
          </label>
          <input
            value={props?.resumeData?.email}
            onChange={(e) => handleInputChange(e)}
            type="text"
            id="user-email"
            name="email"
            autoComplete="off"
            placeholder="e.g. johndoe@gmail.com"
            className="colored__itemDefault colored__bgSecondary colored__boxShadowFocus"
          />
        </div>
        <div className="form__group">
          <label htmlFor="user-phone" className="colored__itemDefault">
            Phone
          </label>
          <input
            value={props?.resumeData?.phone}
            onChange={(e) => handleInputChange(e)}
            type="text"
            id="user-phone"
            name="phone"
            autoComplete="off"
            placeholder="e.g. +373 123-345-78"
            className="colored__itemDefault colored__bgSecondary colored__boxShadowFocus"
          />
        </div>
      </div>
      {/* Summary Section */}
      <h2 className="h2 colored__itemDefault" style={{ marginTop: "50px" }}>
        Professional Summary
      </h2>
      <div className="form__row">
        <p>Include 2-3 clear sentences about your overall experience </p>
        <textarea
          value={props?.resumeData?.summary}
          id="user-summary"
          name="summary"
          maxLength={484}
          onChange={(e) => handleInputChange(e)}
          placeholder="e.g. 5+ years' experience in customer service and other client-facing roles. Strong leadership experience in both professional and extra-curricular settings..."
          className="colored__itemDefault colored__bgSecondary colored__boxShadowFocus"
        ></textarea>
      </div>
    </>
  );
};

export default UserDetailsSection;
