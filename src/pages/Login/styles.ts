import styled from 'styled-components';
import { primary, secondary, white, grey } from "../../styles/colors";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto auto;
  width: 350px;
  background: ${white};
  padding: 36px;
  border-radius: 10px;
  border: 1px solid ${primary};

  img {
    width: 320px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
      flex: 1;
      font-size: 20px;
      line-height: 30px;
      padding: 4px;
      margin-top: 40px;
      border-radius: 5px;
      border: 1px solid ${primary};
      color: ${secondary};
      &::placeholder {
        color: ${grey};
      }
    }
    a {
      display: flex;
      text-decoration: none;
      button {
        flex: 1;
        margin-top: 50px;
        border-radius: 5px;
        background-color: ${secondary};
        color: ${white};
        height: 53px;
        font-size: 20px;
        font-weight: bold;
        border: 2px solid;
        transition: background-color .5s;
        &:hover {
          background: ${primary};
        }
      }
    }
  }
`;
