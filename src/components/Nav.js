import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  background-color: teal;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    margin: 0;
  }

  .navHome {
    font-size: 30px;
    font-weight: 700;
    text-decoration: none;
  }

  .navLinks {
    font-size: 20px;
    margin: 10px;

    * {
      text-decoration: none;
    }

    i {
      margin-right: 7px;
    }
  }
`;

function Nav(props) {
  return (
    <StyledNav>
      <Link to="/" className="navHome">
        Galactic Visitor
      </Link>
      <div className="navLinks">
        <Link to="/cart">
          <i className="fas fa-rocket"></i>
          <span>{props.items}</span>
        </Link>
      </div>
    </StyledNav>
  );
}

export default Nav;
