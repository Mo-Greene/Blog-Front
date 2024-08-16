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
  `,

  WriteButton: styled.div`
      margin-left: 20px;

      a {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 8px;
          text-decoration: none;
          color: white;
          background-color: #555;
          font-weight: bold;
          transition: background-color 0.3s, transform 0.3s;

          &:hover {
              background-color: #333;
              transform: scale(1.05);
          }
      }
  `,
};