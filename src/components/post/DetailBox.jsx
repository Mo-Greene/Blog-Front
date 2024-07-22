import PropTypes from "prop-types";
import {styles} from './styles.js';
import {Helmet} from "react-helmet";
import MDEditor from "@uiw/react-md-editor";

const DetailBox = ({data}) => {

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <styles.Heading>{data.title}</styles.Heading>
      <styles.HeadingSub>{data.createdAt} - {data.tagName}</styles.HeadingSub>
      <div className="markdownDiv" data-color-mode="dark" style={{padding: 15}}>
        <MDEditor.Markdown
          source={data.content}
        />
      </div>
    </>
  )
}

DetailBox.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    tagName: PropTypes.string,
  }).isRequired,
}

export default DetailBox;