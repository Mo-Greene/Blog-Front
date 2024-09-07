import {styles} from "./styles.js"
import PropTypes from "prop-types";
import {useState} from "react";
import PostList from "./PostList.jsx";

const PostBox = ({data, onSearch, isLoading, onLoadMore, hasMore}) => {

  const [placeholder, setPlaceholder] = useState("Search Title..");
  const [title, setTitle] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setTitle(value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch({title});
    }
  }

  return (
    <>
      <styles.UiDivTag>
        <styles.SearchInput
          placeholder={placeholder}
          value={title}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          onFocus={() => setPlaceholder("")}
          onBlur={() => setPlaceholder("Search Title..")}
        />
      </styles.UiDivTag>

      <PostList data={data} isLoading={isLoading}/>

      {hasMore && !isLoading && (
        <styles.LoadMore onClick={e => {
          e.preventDefault();
          onLoadMore();
        }}>
          More
        </styles.LoadMore>
      )}
    </>
  )
}

PostBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    tagId: PropTypes.number,
    tagName: PropTypes.string,
    slug: PropTypes.string,
  })).isRequired,
  onSearch: PropTypes.func,
  isLoading: PropTypes.bool,
  onLoadMore: PropTypes.func,
  hasMore: PropTypes.bool,
};

export default PostBox;