import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetchCategories from "../hooks/useFetchCategories";
import useAccessToken from "../hooks/useAccessToken";
import Button from "./ui/Button";

const Container = styled.header`
  margin-bottom: 2rem;

  h1 {
    font-size: 4rem;
  }

  nav {
    padding-block: 2rem;

    ul {
      display: flex;
    }

    li {
      margin-right: 2rem;
    }

    .active {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default function Header() {
  const { accessToken } = useAccessToken();

  const { categories } = useFetchCategories();

  const handleClickLogout = async () => {
    // setAccessToken('')
    // navigate('/')
  };

  return (
    <Container>
      <h1>Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
            {!!categories.length && (
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link to={`/products?categoryId=${category.id}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {accessToken ? (
            <>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Button onClick={handleClickLogout}>Logout</Button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  );
}
