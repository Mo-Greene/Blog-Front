import {useState} from "react";
import {styles} from './styles';
import {createPost} from "../../api/post/post.js";
import {useNavigate} from "react-router-dom";
import ReactEditorModule from "../../module/ReactEditorModule.jsx";
import {marked} from "marked";
import TagSelector from "./TagSelector.jsx";

const WriteBox = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [plainContent, setPlainContent] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const navigate = useNavigate();

  /**
   * 제목 타이틀 작성
   * @param e
   */
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  /**
   * 내용 작성
   * @param data
   */
  const handleContentChange = (data) => {
    const htmlContent = marked(data);
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const textContent = doc.body.textContent || "";
    setContent(data);
    setPlainContent(textContent);
  }

  /**
   * 등록 버튼
   * @returns {Promise<void>}
   */
  const handleSubmit = async () => {
    const postData = {
      title: title,
      content: content,
      plainContent: plainContent,
      tagId: selectedTag
    };

    const response = await createPost(postData);
    if (response.data.result === "SUCCESS") {
      alert("게시글 등록")
      navigate("/posts")
    } else {
      alert(response.data.message);
    }
  }

  return (
    <>
      <div style={{marginLeft: "1rem"}}>
        <div style={{marginTop: "1rem"}}>
          <h1>Posting Blog</h1>
          <h3>Title</h3>
          <span>
            <styles.TitleInput onChange={handleTitleChange}/>
          </span>

          <h3>Tag</h3>
          <span>
            <TagSelector setSelectedTag={setSelectedTag}/>
          </span>

          <h3>Content</h3>
          <ReactEditorModule
            value={editorValue}
            onChange={(value) => {
              setEditorValue(value);
              handleContentChange(value);
            }}
          />

          <div style={{display: "flex", justifyContent: "flex-end", paddingTop: "1rem"}}>
            <styles.SubmitButton onClick={handleSubmit}>Write</styles.SubmitButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default WriteBox;