import PostBox from "../../components/post/PostBox.jsx";
import {useEffect, useRef, useState} from "react";
import {getPostList} from "../../api/post/post.js";
import {useSearchParams} from "react-router-dom";

const Post = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchParam = {
    title: searchParams.get("title") || "",
    tagId: searchParams.get("tagId") || "",
    lastIndex: searchParams.get("lastIndex") || "",
  }

  /**
   * 게시글 조회
   * @returns {Promise<void>}
   */
  const getPost = async () => {
    setIsLoading(true);

    const response = await getPostList(searchParam);
    setData(response.data.data);

    setIsLoading(false);
  }

  const handleSearch = (newParams) => {
    const updatedParams = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        updatedParams.set(key, value);
      } else {
        updatedParams.delete(key);
      }
    });
    setSearchParams(updatedParams);

    if (!newParams.lastIndex) {
      setData([]);
    }
  }

  useEffect(() => {
    const append = searchParams.get("lastIndex") !== null;
    getPost(append);
  }, [searchParams]);

  return (
    <>
      <PostBox
        data={data}
        onSearch={handleSearch}
        isLoading={isLoading}
      />
    </>
  )
}

export default Post;