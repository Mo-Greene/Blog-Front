import PropTypes from "prop-types";
import LoadingSpinner from "../ui/LoadingSpinner.jsx";
import {styles} from "./styles.js";

const PostList = ({data, isLoading}) => {

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : data.length === 0 ? (
        <div style={{textAlign: "center", color: "gray", margin: "auto"}}>
          조회되는 결과가 없습니다.
        </div>
      ) : (
        data.map((post) => (
          <styles.Box key={post.id}>
            <div style={{flex: 1}}>
              <styles.StyledLink to={`/posts/${encodeURIComponent(post.slug)}`}>
                <h2 style={{marginTop: "0px"}}>{post.title}</h2>
                <p style={{color: "gray"}}>{post.preview}</p>
              </styles.StyledLink>
              <small style={{color: "gray"}}>
                {post.createdAt} | {post.tagName}
              </small>
            </div>
            {post.thumbnail && (
              <div>
                <styles.StyledLink to={`/posts/${encodeURIComponent(post.slug)}`}>
                  <styles.Image src={post.thumbnail} alt={post.title}/>
                </styles.StyledLink>
              </div>
            )}
          </styles.Box>
        ))
      )}
    </>
  );
};

PostList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    tagId: PropTypes.number,
    tagName: PropTypes.string,
    slug: PropTypes.string.isRequired,
  })).isRequired,
  isLoading: PropTypes.bool,
};

export default PostList;