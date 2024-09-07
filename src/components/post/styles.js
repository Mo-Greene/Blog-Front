import styled from "styled-components";
import {Link} from "react-router-dom";

export const styles = {

  Box: styled.div`
      max-width: 60%;
      margin: 0 auto;
      border-bottom: 1px solid lightgray;
      padding: 1rem;
      display: flex;
      align-items: center;
      transition: transform 0.2s ease 0s, background-color 0.3s, box-shadow 0.3s;

      &:hover {
          background-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
          transform: scale(1.02);
          border-radius: 10px;
      }
  `,

  StyledLink: styled(Link)`
      text-decoration: none;
      color: inherit;
  `,

  Image: styled.img`
      margin-left: 10px;
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 10%;
  `,

  TitleBoxDiv: styled.div`
      background-color: #151515;
      display: flex;
      padding: 2rem;
  `,

  TitleDiv: styled.div`
      max-width: 80%;
      width: 50%;
      margin: auto;
      text-align: left;
  `,

  Heading: styled.div`
      color: white;
      margin-top: 2rem;
      font-size: xxx-large;
      font-weight: bold;
  `,

  HeadingSub: styled.div`
      margin-top: 1rem;
      padding-bottom: 2rem;
      font-weight: bold;
      color: #777;
  `,

  MarkdownDiv: styled.div`
      padding-top: 4rem;
      max-width: 60%;
      margin: auto;
      
      .wmde-markdown {
          h1 {
              border-bottom: 0;
          }
          h2 {
              border-bottom: 0;
          }
          font-size: 17px;
          font-family: Pretendard-Regular;
          padding: 1rem;
          border-radius: 8px;
          background-color: #f5f5f5;
      }
  `,

  SearchInput: styled.input`
      border: none;
      border-bottom: 1px solid #ccc;
      padding: 0.5rem;
      text-align: center;
      outline: none;
      font-size: large;
  `,

  UiDivTag: styled.div`
      display: flex;
      justify-content: center;
      margin: 3rem;
  `,

  LoadMore: styled.button`
      background-color: #f5f5f5;
      color: gray;
      border: none;
      padding: 10px 20px;
      margin: 20px auto;
      display: block;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
          background-color: lightgray;
      }

      &:focus {
          outline: none;
      }

      &:disabled {
          cursor: not-allowed;
      }
  `,
}
