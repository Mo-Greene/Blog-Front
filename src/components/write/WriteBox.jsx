import {useState} from "react";
import {styles} from './styles';
import {createPost} from "../../api/post/post.js";
import {useNavigate} from "react-router-dom";
import ToastEditor from "../../module/ToastEditor.jsx";

const WriteBox = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [plainContent, setPlainContent] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (data) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const textContent = doc.body.textContent || "";
    setContent(data);
    setPlainContent(textContent);
  }

  const handleSubmit = async () => {
    const postData = {
      title: title,
      content: content,
      plainContent: plainContent,
      //todo : tagId input 추가
      tagId: 1
    }

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
          <h3>Content</h3>
          <ToastEditor setContent={handleContent}/>
          <div style={{display: "flex", justifyContent: "flex-end", paddingTop: "1rem"}}>
            <styles.SubmitButton onClick={handleSubmit}>Write</styles.SubmitButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default WriteBox;