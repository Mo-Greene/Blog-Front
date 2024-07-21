import DetailBox from "../../components/post/DetailBox.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findPostDetail} from "../../api/post/post.js";

const PostDetail = () => {

  const { postId } = useParams();
  const [data, setData] = useState(null);

  /**
   * 게시글 상세조회
   * @returns {Promise<void>}
   */
  const findPost = async () => {
    const response = await findPostDetail(postId);
    setData(response.data.data);
  }

  useEffect(() => {
    findPost();
  }, []);

  return (
    <>
      {data ? <DetailBox data={data} /> : <p></p>}
    </>
  )
}

export default PostDetail;