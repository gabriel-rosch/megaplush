import styled from 'styled-components';

import { primary, secondary, white } from "../../styles/colors";
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 270px;
    h3 {
      font-size:22px;
      font-weight: bold;
      color: ${secondary};
      margin-top: 30px;
    }
    span {
      span {
        button {
          background-color: ${secondary};
        }
      }
    }
    > div {
      max-height: 180px;
    }
    > button {
        flex: 1;
        margin-top: 80px;
        border-radius: 5px;
        background-color: ${secondary};
        color: ${white};
        height: 53px;
        font-size: 20px;
        font-weight: bold;
        border: 2px solid;
        transition: background-color .5s;
        &:hover {
          background-color: ${primary};
        };
      }
  }
`;
