import PropTypes from "prop-types";
import {styles} from './styles.js';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import MDEditor from "@uiw/react-md-editor";

const DetailBox = ({data}) => {

  return (
    <HelmetProvider>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <styles.Heading>{data.title}</styles.Heading>
      <styles.HeadingSub>{data.createdAt} - {data.tagName}</styles.HeadingSub>
      <styles.MarkdownDiv data-color-mode="dark">
        <MDEditor.Markdown
          source={data.content}
        />
      </styles.MarkdownDiv>
    </HelmetProvider>
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