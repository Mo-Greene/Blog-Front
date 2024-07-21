import styled from "styled-components";
import {Link} from "react-router-dom";

export const styles = {

  Box: styled.div`
      border-bottom: 1px solid #444;
      padding: 10px 0;
      display: flex;
      align-items: center;
      transition: background-color 0.3s, box-shadow 0.3s;

      &:hover {
          background-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
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
}