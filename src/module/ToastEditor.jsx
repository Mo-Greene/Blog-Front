import {Editor} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import '@toast-ui/editor/dist/i18n/ko-kr';
import {useRef} from "react";
import PropTypes from "prop-types";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-java';

const toolbar = [
  ["heading", "bold", "italic", "strike"],
  ["hr", "quote"],
  ["ul", "ol", "task", "indent", "outdent"],
  ["image", "link"],
  ["code", "codeblock"],
]

const ToastEditor = ({setContent}) => {

  const editorRef = useRef();

  const handleContent = () => {
    setContent(editorRef.current.getInstance().getHTML())
  }

  return (
    <>
      <Editor
        height={"400px"}
        previewStyle='vertical'
        initialEditType="markdown"
        hideModeSwitch="true"
        toolbarItems={toolbar}
        theme="dark"
        useCommandShortcut="true"
        language="ko-KR"
        initialValue={" "}
        ref={editorRef}
        onChange={handleContent}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </>
  )
};

ToastEditor.propTypes = {
  setContent: PropTypes.func.isRequired
};

export default ToastEditor;