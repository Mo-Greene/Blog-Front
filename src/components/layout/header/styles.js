import styled from "styled-components";

export const styles = {

  Title: styled.h1`
      a {
          color: #fff;
          text-decoration: none;
          font-size: xx-large;
      }
  `,

  Nav: styled.nav`
      background: #2b2b2b;
      color: #fff;
      padding: 1rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #444;
  `,

  Ul: styled.ul`
      margin-left: 1rem;
      list-style: none;
      display: flex;
      gap: 1rem;
  `,

  Li: styled.li`
      margin-left: 1rem;
      font-size: large;
      a {
          color: gray;
          text-decoration: none;
          
          &:hover {
              text-decoration: underline;
          }

          &.active {
              color: #fff;
              background: #444;
              border-radius: 5px;
              text-decoration: underline;
          }
      }
  `,

  GithubLink: styled.a`
      color: #fff;
      text-decoration: none;
      margin-left: auto;

      &:hover {
          text-decoration: underline;
      }
  `
};