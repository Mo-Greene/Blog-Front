import PropTypes from "prop-types";
import {styles} from './styles.js';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import MDEditor from "@uiw/react-md-editor";

const DetailBox = ({data}) => {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{data.title}</title>
        </Helmet>

        <styles.TitleBoxDiv>
          <styles.TitleDiv>
            <styles.Heading>{data.title}</styles.Heading>
            <styles.HeadingSub>{data.createdAt} - {data.tagName}</styles.HeadingSub>
          </styles.TitleDiv>
        </styles.TitleBoxDiv>

        <styles.MarkdownDiv data-color-mode="light">
          <MDEditor.Markdown
            source={data.content}
          />
        </styles.MarkdownDiv>

      </HelmetProvider>
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