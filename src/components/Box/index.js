import styled from "styled-components";

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  padding: 16px;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #202020;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ecf2fa;
  }
  input {
    width: 100%;
    background-color: #f4f4f4;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #ffffff;
    border-radius: 10000px;
    background-color: #353535;
  }
  textarea {
    font-family: sans-serif;
    padding: 15px;
    width: 100%;
    border: none;
    border-radius: 8px;
    ::placeholder {
      color: #353535;
    }
    .recado {
      border-radius: 8px;
      border: 1px solid #ddd;
      padding: 15px;
      font-size: 14px;
    }
  }
`;

export default Box;
