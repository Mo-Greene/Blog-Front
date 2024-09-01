import styled from "styled-components";

export const styles = {

  Container: styled.div`
      max-width: 60%;
      margin: 0 auto;
      padding: 1rem;
  `,

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
      background: #000000;
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

  FileUploadLabel: styled.label`
      display: inline-flex;
      align-items: center;
      border-radius: 0.375rem;
      background-color: black;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: #fff; /* Primary foreground color */
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
          background-color: #0d1117; /* Slightly darker primary color */
      }

      &:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
      }
  `,

  UploadIcon: styled.svg`
      margin-right: 0.5rem;
      height: 1.25rem;
      width: 1.25rem;
  `,

  FileInput: styled.input`
      display: none;
  `,

  ImagePreview: styled.img`
      margin-left: 10px;
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 10%;
  `,
}