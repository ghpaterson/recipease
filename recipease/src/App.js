import Pages from "./pages/pages";
import Category from "./components/category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiPeas } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiPeas />
          <Logo to={"/"}>Recipease</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: "lato", sans-serif;
  color: #420719;
`;

const Nav = styled.div`
  border-radius: 2rem;
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #6096b4;
  margin-top: 1rem;
  margin-bottom: 1rem;

  svg {
    font-size: 3rem;
    color: #420719;
    margin-left: 1rem;
  }
`;
export default App;
