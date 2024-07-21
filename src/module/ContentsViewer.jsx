import {Viewer} from "@toast-ui/react-editor";
import PropTypes from "prop-types";
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from 'prismjs';

const ContentsViewer = ({contents}) => {

  return (
    <Viewer
      width="100%"
      initialValue={contents}
      plugins={[[codeSyntaxHighlight, {highlight: Prism }]]}
    />
  )
}

ContentsViewer.propTypes = {
  contents: PropTypes.string
};

export default ContentsViewer;