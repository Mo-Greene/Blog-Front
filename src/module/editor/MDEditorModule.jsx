import MDEditor from "@uiw/react-md-editor";
import PropTypes from "prop-types";
import onImagePasted from "./OnImagePasted.jsx";

const MDEditorModule = ({ value, onChange, setEditorValue }) => {

  return (
    <div className="markarea">
      <div data-color-mode="dark">
        <MDEditor height={600}
                  highlightEnable={true}
                  hideToolbar
                  value={value}
                  onChange={onChange}
                  onPaste={async (event) => {
                    await onImagePasted(event.clipboardData, setEditorValue)
                  }}
                  onDrop={ async (event) => {
                    await onImagePasted(event.dataTransfer, setEditorValue)
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