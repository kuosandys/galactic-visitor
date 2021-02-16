import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.mainColor};
  padding: 10px 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${(props) => props.theme.bottomShadow};
  z-index: 10;

  * {
    margin: 0;
    color: ${(props) => props.theme.lightTextColor};
  }

  .navHome {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: -0.7px;

    i {
      margin-right: 7px;
    }
  }

  .navLinks {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;

    .navLink {
      margin: 0 10px;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export { StyledNav };
