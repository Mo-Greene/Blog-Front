import MDEditor from "@uiw/react-md-editor";
import PropTypes from "prop-types";
import onImagePasted from "./OnImagePasted.jsx";

const MDEditorModule = ({ value, onChange, setEditorValue }) => {

  const getEditorValue = () => value;

  return (
    <div className="markarea">
      <div data-color-mode="light">
        <MDEditor height={600}
                  highlightEnable={true}
                  hideToolbar
                  value={value}
                  onChange={onChange}
                  onPaste={async (event) => {
                    await onImagePasted(event.clipboardData, getEditorValue, setEditorValue)
                  }}
                  onDrop={ async (event) => {
                    await onImagePasted(event.dataTransfer, getEditorValue, setEditorValue)
                  }}
        />
      </div>
    </div>
  );
};

MDEditorModule.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  setEditorValue: PropTypes.func,
}

export default MDEditorModule;