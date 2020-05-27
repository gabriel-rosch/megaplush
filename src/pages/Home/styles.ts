import styled from 'styled-components';
import { primary, secondary } from "../../styles/colors";
export const NavBar = styled.nav`
  border-bottom: ${primary} solid 2px;
  button {
    svg {
      height: 30px;
      width: 30px;
    }
  }
  a {
    img {
      width: 220px;
    }
  }
  div {
    ul {
      li {
        align-items: center;
        a {
          font-size: 22px;
          color: ${secondary} !important;
          font-weight: bold;
        }
        div {
          border-color: ${secondary};
        }
      }
    }
  }
`;
