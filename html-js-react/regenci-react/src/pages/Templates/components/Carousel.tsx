import { FC } from "react";
import Coverflow from "react-coverflow";
import { useSelector } from "react-redux";
import ClickNHold from "react-click-n-hold";
import { iRootState } from "../../../utils/interfaces/store";
import { iTemplate } from "../../../utils/interfaces/templates";

interface iProps {
  onDoubleClick: Function;
  onClickNHold: Function;
}

const Carousel: FC<iProps> = ({ onDoubleClick, onClickNHold }) => {
  const templates = useSelector((state: iRootState) => state?.templates);
  return (
    <Coverflow
      displayQuantityOfSide={2}
      navigation={false}
      enableScroll={false}
      clickable={true}
      active={3}
      media={{
        "@media (max-width: 900px)": {
          width: "600px",
          height: "500px",
        },
        "@media (min-width: 900px)": {
          width: "1100px",
          height: "700px",
        },
      }}
    >
      {templates?.map((template: iTemplate, i: number) => (
        <div
          key={i}
          role="menuitem"
          tabIndex={i}
          onDoubleClick={() => onDoubleClick(template?._id)}
        >
          <ClickNHold time={0.8} onClickNHold={onClickNHold}>
            <img src={template?.image} alt={template?.name} />
          </ClickNHold>
        </div>
      ))}
    </Coverflow>
  );
};

export default Carousel;
