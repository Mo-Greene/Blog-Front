import {styles} from "./styles.js"
import PropTypes from "prop-types";
import {useState} from "react";
import LoadingSpinner from "../ui/LoadingSpinner.jsx";

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

      {/*화면 로딩*/}
      {isLoading ? (
        <LoadingSpinner />
      ) : data.length === 0 ? (
        <div style={{textAlign: "center", color: "gray"}}>조회되는 결과가 없습니다.</div>
      ) : (
        data.map((post) => (
          <styles.Box key={post.id}>
            <div style={{flex: 1}}>
              <styles.StyledLink to={`/posts/${post.id}`}>
                <h2 style={{marginTop: "0px"}}>{post.title}</h2>
                <p style={{color: "gray"}}>{post.preview}</p>
              </styles.StyledLink>
              <small style={{color: "gray"}}>{post.createdAt} | {post.tagName}</small>
            </div>
            {post.thumbnail && (
              <div>
                <styles.StyledLink to={`/posts/${post.id}`}>
                  <styles.Image src={post.thumbnail} alt={post.title}/>
                </styles.StyledLink>
              </div>
            )}
          </styles.Box>
        ))
      )}
      
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