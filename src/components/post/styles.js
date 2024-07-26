import styled from "styled-components";
import {Link} from "react-router-dom";

export const styles = {

  Box: styled.div`
      border-bottom: 1px solid #444;
      padding: 1rem;
      display: flex;
      align-items: center;
      transition: transform 0.2s ease 0s, background-color 0.3s, box-shadow 0.3s;

      &:hover {
          background-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
          transform: scale(1.05);
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
      border-radius: 20%;
  `,

  Heading: styled.div`
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
      padding-top: 2rem;
      
      .wmde-markdown {
          background-color: #2b2b2b;
          color: #f8f8f2;
          
          h1 {
              border-bottom: 0;
          }
          
          h2 {
              border-bottom: 0;
          }
      }
  `,
}