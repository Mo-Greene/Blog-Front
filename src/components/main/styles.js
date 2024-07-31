import styled from "styled-components";
import {Link} from "react-router-dom";

export const styles = {

  LatestPostsContainer: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 60%;
      margin: 0 auto;
      border-bottom: 1px solid lightgray;
      padding: 6rem 0 1rem 0;
  `,

  LatestPostsH1: styled.h1`
      max-width: 60%;
      margin: 0;
      width: 60%;
  `,

  ReadAllPostsLink: styled(Link)`
      text-decoration: none;
      color: gray;
      margin-right: 1rem;

      &:hover {
          text-decoration: underline;
      }
  `,

  ProfileContainer: styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem 0;
      padding: 2rem;
      border: 1px solid lightgray;
      border-radius: 10px;
      width: 60%;
      margin: 2rem auto;
  `,

  ProfileImage: styled.img`
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-bottom: 1rem;
  `,

  ProfileLeft: styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 2rem;
  `,

  ProfileRight: styled.div`
      display: flex;
      flex-direction: column;
  `,

  AdditionalInfo: styled.div`
      margin-top: 1rem;
      text-align: left;
  `,

  ProfileDetail: styled.p`
      margin: 0.5rem 0;
      color: gray;
  `,

  ProfileName: styled.h2`
      margin: 0;
  `,

  ProfileBio: styled.p`
      text-align: center;
      margin-top: 0.5rem;
      width: 60%;
      color: gray;
  `,

  CardSection: styled.div`
      margin-top: 1rem;
      width: 50%;
  `,

  CardTitle: styled.h3`
      margin: 1rem 0;
  `,

  CardList: styled.ul`
      list-style-type: none;
      padding: 0;
  `,

  CardItem: styled.li`
      margin-bottom: 0.5rem;
  `,

  ToggleButton: styled.button`
    margin-top: 2rem;
    padding: 0.5rem 0 0 0;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    background: none;
  `,
}