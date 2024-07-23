import MDEditor from "@uiw/react-md-editor";
import PropTypes from "prop-types";

const ReactEditorModule = ({ value, onChange }) => {

  return (
    <div className="markarea">
      <div data-color-mode="dark">
        <MDEditor height={700}
                  value={value}
                  onChange={onChange}
        />
      </div>
    </div>
  );
};

ReactEditorModule.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default ReactEditorModule;