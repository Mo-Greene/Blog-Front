import PostBox from "../../components/post/PostBox.jsx";
import {useEffect, useState} from "react";
import {getPostList} from "../../api/post/post.js";

const Post = () => {

  const [data, setData] = useState([]);

  /**
   * 게시글 조회
   * @returns {Promise<void>}
   */
  const getPost = async () => {
    try {
      const response = await getPostList();
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <PostBox data={data} />
    </>
  )
}

export default Post;