import {styles} from "./styles.js"
import PropTypes from "prop-types";
import {useState} from "react";
import PostList from "./PostList.jsx";

const PostBox = ({data, onSearch, isLoading, handleLoadMore}) => {

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

      <PostList data={data} isLoading={isLoading} />

      <styles.UiDivTag>
        <styles.LoadMore onClick={handleLoadMore}>More</styles.LoadMore>
      </styles.UiDivTag>
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
  })).isRequired,
  onSearch: PropTypes.func,
  isLoading: PropTypes.bool,
  handleLoadMore: PropTypes.func,
};

export default PostBox;