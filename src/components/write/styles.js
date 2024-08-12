import styled from "styled-components";

export const styles = {

  TitleInput: styled.input`
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      border: none;
      border-bottom: 1px solid #444;
      border-radius: 0;
      margin-bottom: 1rem;
      box-sizing: border-box;
      outline: none;
      transition: border-bottom 0.2s ease;

      &:focus {
          border-bottom: 3px solid #444;
      }
  `,

  SubmitButton: styled.button`
      margin: 0;
      border: none;
      cursor: pointer;
      font-family: "Noto Sans KR", sans-serif;
      font-size: 1rem;
      padding: var(--button-padding, 12px 16px);
      border-radius: 8px;
      background: #555555;
      color: #ffffff;

      &:active,
      &:hover,
      &:focus {
          background: #777777;
      }

      &:disabled {
          cursor: default;
          opacity: 0.5;
          background: #555555;
      }
  `,

  StyledSelect: styled.select`
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #444;
      border-radius: 4px;
      margin-bottom: 1rem;
      box-sizing: border-box;
      outline: none;
      transition: border 0.2s ease;

      &:focus {
          border: 1px solid #777;
      }
  `,

  StyledOption: styled.option`
      background-color: #2b2b2b;
      color: white;
  `,
}