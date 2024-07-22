import MDEditor from "@uiw/react-md-editor";

const ReactEditorModule = ({ value, onChange }) => {

  return (
    <div className="markarea">
      <div data-color-mode="dark">
        <MDEditor height={700} value={value} onChange={onChange}/>
      </div>
    </div>
  );
};

export default ReactEditorModule;