import styled from "styled-components";

export const styles = {

  Title: styled.h1`
      a {
          color: black;
          text-decoration: none;
          font-size: xx-large;
      }
  `,

  Nav: styled.nav`
      padding: 1rem;
      display: flex;
      align-items: center;
      max-width: 70%;
      margin: 0 auto;
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
          font-weight: bold;
          text-decoration: none;
          color: black;
      }
  `,

  GithubLink: styled.a`
      margin-left: auto;
  `
};