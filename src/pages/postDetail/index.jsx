import DetailBox from "../../components/post/DetailBox.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findPostDetail} from "../../api/post/post.js";
import LoadingSpinner from "../../components/ui/LoadingSpinner.jsx";

const PostDetail = () => {

  const {postId} = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * 게시글 상세조회
   * @returns {Promise<void>}
   */
  const findPost = async () => {
    setIsLoading(true);
    const response = await findPostDetail(postId);
    setData(response.data.data);
    setIsLoading(false);
  }

  useEffect(() => {
    findPost();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner/>
      ) : data ? (
        <DetailBox data={data}/>
      ) : (
        <p style={{textAlign: "center", color: "gray"}}>게시글을 찾을 수 없습니다.</p>
      )}
    </>
  )
}

export default PostDetail;