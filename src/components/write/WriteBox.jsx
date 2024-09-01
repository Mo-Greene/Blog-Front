import {useState} from "react";
import {styles} from './styles';
import {createPost} from "../../api/post/post.js";
import {useNavigate} from "react-router-dom";
import {marked} from "marked";
import TagSelector from "./TagSelector.jsx";
import MDEditorModule from "../../module/editor/MDEditorModule.jsx";

const WriteBox = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [plainContent, setPlainContent] = useState("");
  const [editorValue, setEditorValue] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
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
   * 썸네일 작성
   * @param e
   */
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file); // 파일 선택 처리
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file)); // 미리보기 URL 생성
    }
  };

  /**
   * 등록 버튼
   * @returns {Promise<void>}
   */
  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("plainContent", plainContent);
    formData.append("tagId", selectedTag);
    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    const response = await createPost(formData);
    if (response.data.result === "SUCCESS") {
      alert("게시글 등록")
      navigate("/posts")
    } else {
      alert(response.data.message);
    }
  }

  return (
    <>
      <styles.Container>
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
        <MDEditorModule
          value={editorValue}
          onChange={(value) => {
            setEditorValue(value);
            handleContentChange(value);
          }}
          setEditorValue={setEditorValue}
        />

        <h3>Thumbnail</h3>
        <styles.FileUploadLabel htmlFor="file-upload">
          <styles.UploadIcon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          </styles.UploadIcon>
          Upload File
          <styles.FileInput id="file-upload" type="file" accept="image/*" onChange={handleThumbnailChange}/>
        </styles.FileUploadLabel>

        {thumbnailPreview && ( // 미리보기 이미지가 있으면 표시
          <styles.ImagePreview src={thumbnailPreview} alt="Thumbnail Preview" />
        )}

        <div style={{display: "flex", justifyContent: "flex-end", paddingTop: "1rem"}}>
          <styles.SubmitButton onClick={handleSubmit}>Write</styles.SubmitButton>
        </div>
      </styles.Container>
    </>
  )
}

export default WriteBox;