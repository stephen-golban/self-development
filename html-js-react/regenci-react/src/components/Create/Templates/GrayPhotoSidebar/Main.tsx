
function Main(props: any) {
  return (
    <>
      {props?.resumeData && (
        <div className="main">
          {/* Experience */}
          {props?.resumeData?.employmentData?.length > 0 && (
            <div className="user__activity">
              <div className="headline">
                <div className="icon__container">
                </div>
                <h1>Experience</h1>
              </div>
              {props?.resumeData?.employmentData.map((emp: any) => (
                <div className="content" key={emp.id}>
                  <div className="post__headline">
                    {emp.ej + ", " + emp.employer}
                  </div>
                  <div className="last__headline">
                    <div className="city">{emp.ec} </div>
                    <div className="date">
                      {" "}
                      {", " + emp.esd + "-" + emp.eed}
                    </div>
                  </div>
                  {emp.d ? (
                    <div className="fragment__description">{emp.d}</div>
                  ) : null}
                </div>
              ))}
            </div>
          )}
          {/* Education */}
          {props?.resumeData?.educationData?.length > 0 && (
            <div className="user__activity">
              <div className="headline">
                <div className="icon__container">
                </div>
                <h1>Education</h1>
              </div>
              {props?.resumeData?.educationData.map((edu: any) => (
                <div className="content" key={edu.id}>
                  <div className="post__headline">
                    {edu.sn + ", " + edu.deg}
                  </div>
                  <div className="last__headline">
                    <div className="school__name">{edu.sc}</div>
                    <div className="date">{", " + edu.sd + " - " + edu.ed}</div>
                  </div>
                  {edu.d ? (
                    <div className="fragment__description">{edu.d}</div>
                  ) : null}
                </div>
              ))}
            </div>
          )}
          {/* Custom */}
          {props?.resumeData?.customSectionData?.length > 0 && (
            <div className="user__activity">
              <div className="headline">
                <div className="icon__container">
                </div>
                <h1>Other</h1>
              </div>
              {props?.resumeData?.customSectionData.map((cst: any) => (
                <div className="content" key={cst.id}>
                  <div className="post__headline">{cst.c1}</div>
                  <div className="last__headline">
                    <div className="school__name">{cst.c2}</div>
                    <div className="date">{", " + cst.c3 + " - " + cst.c4}</div>
                  </div>
                  {cst.c5 ? (
                    <div className="fragment__description">{cst.c5}</div>
                  ) : null}
                </div>
              ))}
            </div>
          )}
          {/* Skills */}
          {props?.resumeData?.skills?.length > 0 ||
          props?.resumeData?.languageData?.length > 0 ? (
            <div className="user__activity">
              <div className="headline">
                <div className="icon__container">
                </div>
                <h1>Skills</h1>
              </div>
              <div className="activity__content">
                {props?.resumeData?.skills?.length > 0 && (
                  <div className="skills">
                    {props?.resumeData?.skills.map((sk: any, i: any) => (
                      <div className="skill" key={i}>
                        # {sk}
                      </div>
                    ))}
                  </div>
                )}
                {props?.resumeData?.languageData?.length > 0 && (
                  <div className="languages__container">
                    <div className="languages">
                      {props?.resumeData?.languageData.map(
                        (ln: any, i: any) => (
                          <div key={i}>
                            <div className="language">
                              <div className="level__container">
                                <div
                                  className="language__level"
                                  style={{
                                    minHeight:
                                      ln.level === "A1 - Beginner"
                                        ? "16%"
                                        : ln.level === "A2 - Elementary"
                                        ? "33%"
                                        : ln.level === "B1 - Intermediate"
                                        ? "49%"
                                        : ln.level === "B2 - Upper Intermediate"
                                        ? "66%"
                                        : ln.level === "C1 - Advanced"
                                        ? "82%"
                                        : ln.level === "C2 - Native"
                                        ? "100%"
                                        : "0%",
                                  }}
                                ></div>
                              </div>
                              <div className="actual__language">
                                {ln.language}
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    <h1>Languages</h1>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

export default Main;
