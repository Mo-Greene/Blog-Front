import MDEditor from "@uiw/react-md-editor";
import PropTypes from "prop-types";
import onImagePasted from "./OnImagePasted.jsx";

const MDEditorModule = ({value, onChange, setEditorValue}) => {

  const getEditorValue = () => value;

  return (
    <div className="markarea">

      <style>{`
          .w-md-editor-text-input,
          .w-md-editor-text-pre .code-line {
              font-size: 1.3rem !important;
              line-height: 1.5rem !important;
          }

          .w-md-editor-text-pre .code-line {
              display: block;
          }
      `}
      </style>

      <div data-color-mode="light">
        <MDEditor height={600}
                  value={value}
                  onChange={onChange}
                  onPaste={async (event) => {
                    await onImagePasted(event.clipboardData, getEditorValue, setEditorValue)
                  }}
                  onDrop={async (event) => {
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