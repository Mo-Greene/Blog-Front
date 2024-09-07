import PostBox from "../../components/post/PostBox.jsx";
import {useEffect, useRef, useState} from "react";
import {getPostList} from "../../api/post/post.js";
import {useSearchParams} from "react-router-dom";

const Post = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const scrollPositionRef = useRef(0);

  const searchParam = {
    title: searchParams.get("title") || "",
    tagId: searchParams.get("tagId") || "",
    cursor: cursor
  }

  /**
   * 스크롤 이벤트 핸들러
   */
  const handleScroll = () => {
    scrollPositionRef.current = window.scrollY;
  };

  /**
   * 게시글 조회, 더보기 버튼 스크롤 유지
   * @returns {Promise<void>}
   */
  const getPost = async () => {
    if (!hasMore) return;
    setIsLoading(true);

    const savedScrollPosition = scrollPositionRef.current;

    window.removeEventListener('scroll', handleScroll);

    const response = await getPostList(searchParam);
    const fetchedPosts = response.data.data;

    const lastPostId = fetchedPosts.length > 0 ? fetchedPosts[fetchedPosts.length - 1].id : null;

    setData((prevData) => [...prevData, ...fetchedPosts]);
    setCursor(lastPostId);
    setHasMore(fetchedPosts.length > 0);
    setIsLoading(false);

    requestAnimationFrame(() => {
      window.scrollTo(0, savedScrollPosition);
      window.addEventListener('scroll', handleScroll);
    });
  }

  /**
   * 검색조건
   * @param newParams
   */
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
      setCursor(null);
      setHasMore(true);
    }
  }

  /**
   * 게시글 조회
   */
  useEffect(() => {
    getPost();
  }, [searchParams]);

  /**
   * 컴포넌트 마운트
   */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <PostBox
        data={data}
        onSearch={handleSearch}
        isLoading={isLoading}
        onLoadMore={getPost}
        hasMore={hasMore}
      />
    </>
  )
}

export default Post;