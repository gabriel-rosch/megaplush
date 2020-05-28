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
          @media(max-width: 990px){
           line-height: 45px;
          }
          font-size: 22px;
          text-decoration: none;
          color: ${secondary};
          font-weight: bold;
          margin-left: 14px;
          transition: color .5s;
          &:hover {
            color: ${primary};
          }
        }
        div {
          border-color: ${secondary};
          a{
            margin-left: 0;
          }
        }
      }
    }
  }
`;
