import styled from "styled-components";

export const styles = {
  loginContainer: styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 30vh;
      background-color: #f0f0f0;
  `,

  githubLoginButton: styled.button`
      display: flex;
      align-items: center;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
          background-color: #555;
      }
  `,

  githubIcon: styled.svg`
      margin-right: 10px;
  `
}