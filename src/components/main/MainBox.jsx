import PropTypes from "prop-types";
import PostList from "../post/PostList.jsx";
import {styles} from "./styles.js";
import {useState} from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const MainBox = ({data, isLoading}) => {

  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const cdnBaseUrl = import.meta.env.VITE_CDN_BASE_URL;

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <>
      <styles.ProfileContainer>
        <styles.ProfileImage src={`${cdnBaseUrl}/장현석.png`} alt="Profile Image"/>
        <styles.ProfileName>Mo-Greene</styles.ProfileName>
        <styles.ProfileBio>👋 I'm Backend developer using Java & SpringBoot, constantly striving to improve my code.
        </styles.ProfileBio>


        <styles.CardSection>
          <styles.CardTitle>Career</styles.CardTitle>
          <styles.CardList>
            <styles.CardItem>Iden-it (2023.07 ~ 2024.09) - SI Engineer</styles.CardItem>
          </styles.CardList>
        </styles.CardSection>

        <styles.CardSection>
          <styles.CardTitle>TechStack</styles.CardTitle>
          <styles.CardList>
            <styles.CardItem>&#8226; Java / Spring Boot</styles.CardItem>
            <styles.CardItem>&#8226; MySQL / PostgreSQL</styles.CardItem>
            <styles.CardItem>&#8226; Mybatis / JPA</styles.CardItem>
            <styles.CardItem>&#8226; Git / GitHub</styles.CardItem>
            <styles.CardItem>&#8226; Jenkins / GitHub Actions</styles.CardItem>
            <styles.CardItem>&#8226; Docker</styles.CardItem>
          </styles.CardList>
        </styles.CardSection>

        <styles.ToggleButton onClick={toggleAdditionalInfo}>
          {showAdditionalInfo ? <MdExpandLess style={{color: "gray"}} size={24}/> : <MdExpandMore style={{color: "gray"}}  size={24}/>}
        </styles.ToggleButton>

        {showAdditionalInfo && (
          <styles.AdditionalInfo>
            <styles.ProfileDetail>Name : 장현석</styles.ProfileDetail>
            <styles.ProfileDetail>Birth : 1994. 9. 22</styles.ProfileDetail>
            <styles.ProfileDetail>Email : 13blueboy13@naver.com</styles.ProfileDetail>
          </styles.AdditionalInfo>
        )}

      </styles.ProfileContainer>

      <styles.LatestPostsContainer>
        <styles.LatestPostsH1>Latest Posts</styles.LatestPostsH1>
        <styles.ReadAllPostsLink to="/posts">read all posts</styles.ReadAllPostsLink>
      </styles.LatestPostsContainer>
      <PostList data={data} isLoading={isLoading}/>
    </>
  )
};

MainBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    tagId: PropTypes.number,
    tagName: PropTypes.string,
  })).isRequired,
  isLoading: PropTypes.bool,
}

export default MainBox;