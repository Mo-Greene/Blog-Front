import {styles} from "./styles.js"
import PropTypes from "prop-types";

const PostBox = ({ data }) => {

  return (
    <>
      <h1>Posting</h1>
      {data.map((post) => (
        <styles.Box key={post.id}>
          <div style={{flex: 1}}>
            <styles.StyledLink to={`/posts/${post.id}`}>
              <h2 style={{marginTop: "0px", color: "lightgray"}}>{post.title}</h2>
              <p style={{color: "#999"}}>{post.preview}</p>
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
      ))}
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
    tagName: PropTypes.string,
  })).isRequired,
};

export default PostBox;