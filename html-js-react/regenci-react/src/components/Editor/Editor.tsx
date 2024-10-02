import EditorNav from "./EditorNav";
import EditorSidebar from "./EditorSidebar";
import "../../assets/css/Editor/index.css"

const Editor = () => {
  return (
    <div className="editor themed__bgSecondary">
      <EditorNav />
      <EditorSidebar />
    </div>
  );
};

export default Editor;
