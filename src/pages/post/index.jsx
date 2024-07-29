import PostBox from "../../components/post/PostBox.jsx";
import {useEffect, useState} from "react";
import {getPostList} from "../../api/post/post.js";
import {useSearchParams} from "react-router-dom";

const Post = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const searchParam = {
    title: searchParams.get("title") || "",
    tagId: searchParams.get("tagId") || "",
    lastIndex: searchParams.get("lastIndex") || "",
  }

  /**
   * 게시글 조회
   * @returns {Promise<void>}
   */
  const getPost = async (append = false) => {
    setIsLoading(true);
    try {
      const response = await getPostList(searchParam);
      const newData = response.data.data;

      if (append) {
        setData((prev) => {
          const existingIds = new Set(prev.map(post => post.id));
          const filteredNewData = newData.filter(post => !existingIds.has(post.id));
          return [...prev, ...filteredNewData];
        });
      } else {
        setData(newData);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);

    // 스크롤 위치 복원
    if (append) {
      window.scrollTo(0, scrollPosition);
    }
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

  // 스크롤 위치 저장
  const handleLoadMore = () => {
    setScrollPosition(window.scrollY);
    const lastIndex = data.length > 0 ? data[data.length - 1].id : null;
    handleSearch({ lastIndex });
  };

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
        handleLoadMore={handleLoadMore}
      />
    </>
  )
}

export default Post;