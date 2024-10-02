import { useSelector } from "react-redux";
import { setLocalStorage } from "../../utils/localstorage/localStorage";

const EditorSidebar = () => {
  const templates = useSelector((state: any) => state.templates);

  return (
    <div className="editor__sidebar themed__bgSecondary">
      {templates.map((t: any) => (
        <div
          className="template"
          key={t._id}
          onClick={() => setLocalStorage("selected-template", t._id)}
        >
          <div className="template__name themed__itemSecondary">{t.name}</div>
          <img
            src={t.image}
            alt={t.name}
            className="colored__borderHoverEditor"
          />
        </div>
      ))}
    </div>
  );
};

export default EditorSidebar;
