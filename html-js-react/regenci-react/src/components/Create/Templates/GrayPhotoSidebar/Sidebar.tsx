import React from "react";

function Sidebar(props: any) {
  
  const sidebarStyles = {
    summary: {
      fontSize:
        String(props.resumeData && props.resumeData?.userSummary)?.length > 50
          ? "11px"
          : "13px",
    },
    tags: {
      fontSize:
        (props.resumeData && props.resumeData?.hobbies?.length > 2) ||
        (props.resumeData && props.resumeData?.extraActivities?.length > 2)
          ? "9px"
          : "13px",
      padding:
        (props.resumeData && props.resumeData?.hobbies?.length > 2) ||
        (props.resumeData && props.resumeData?.extraActivities?.length > 2)
          ? "1px 4px"
          : "2px 5px",
      margin:
        (props.resumeData && props.resumeData?.hobbies?.length > 2) ||
        (props.resumeData && props.resumeData?.extraActivities?.length > 2)
          ? "1px 2px"
          : "2px 3px",
      borderRadius:
        (props.resumeData && props.resumeData?.hobbies?.length > 2) ||
        (props.resumeData && props.resumeData?.extraActivities?.length > 2)
          ? "3px"
          : "5px",
    },
  };
  return (
    <>
      <div className="sidebar">
        <div className="top">
          {props?.resumeData?.avatar && (
            <div className="photo">
              <img src={props?.resumeData?.avatar} alt="user_pic" />
            </div>
          )}
          {(props?.resumeData?.firstName || props?.resumeData?.lastName) && (
            <div className="user__name">
              {props?.resumeData?.firstName + " " + props?.resumeData?.lastName}
            </div>
          )}
          {props?.resumeData?.job && (
            <div className="user__job">{props?.resumeData?.job}</div>
          )}
          {props?.resumeData?.userWebLinkData?.length > 0 && (
            <div className="user__website">
              {props?.resumeData?.userWebLinkData.map(
                (link: {
                  link: string | undefined;
                  id: string | number | null | undefined;
                  lbl: React.ReactNode;
                }) => (
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    key={link.id}
                    className="link"
                  >
                    {link.lbl}
                  </a>
                )
              )}
            </div>
          )}
        </div>
        <div className="bottom">
          {props?.resumeData?.summary && (
            <div className="user__summary">
              <span>
              </span>{" "}
              <div className="elements" style={sidebarStyles.summary}>
                {props?.resumeData?.summary}
              </div>
            </div>
          )}
          <div className="bottom__bottom">
            {props?.resumeData?.phone && (
              <div className="user__phone">
                <span>
                  Phone
                </span>
                <div className="elements">{props?.resumeData?.phone}</div>
              </div>
            )}
            {props?.resumeData?.email && (
              <div className="user__email">
                <span>
                  E-mail
                </span>
                <div className="elements">
                  {props?.resumeData?.email}
                </div>
              </div>
            )}
            {props?.resumeData?.hobbies?.length > 0 && (
              <div className="user__hobbies">
                <span>
                  Hobbies
                </span>
                <div className="elements">
                  {props?.resumeData?.hobbies.map(
                    (
                      hob: React.ReactNode,
                      i: string | number | null | undefined
                    ) => (
                      <div key={i} className="hobby" style={sidebarStyles.tags}>
                        {hob}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
            {props?.resumeData?.extraActivities?.length > 0 && (
              <div className="user__extras">
                <span>
                  Extra Activities
                </span>
                <div className="elements">
                  {props?.resumeData?.extraActivities.map(
                    (extra: string, i: string | number | null | undefined) => (
                      <div key={i} className="extra" style={sidebarStyles.tags}>
                        {extra}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
