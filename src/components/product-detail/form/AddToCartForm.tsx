import { Link } from "react-router-dom";

import styled from "styled-components";

import Options from "./Options";
import Quantity from "./Quantity";
import Price from "./Price";
import SubmitButton from "./SubmitButton";

import useAccessToken from "../../../hooks/useAccessToken";

const Container = styled.div`
  margin-bottom: 2rem;
  line-height: 1.8;
`;

export default function AddToCartForm() {
  // useLocation() 이런식으로 원래 있던 주소로 돌아가는거
  const { accessToken } = useAccessToken();

  if (!accessToken) {
    return (
      <Container>
        {/* 주문하려면 <Link to="/login?redirect_to=/productfsd">로그인</Link>  원래 있던 주소로 돌아가는거*/}
        주문하려면 <Link to="/login">로그인</Link>
        하세요
      </Container>
    );
  }

  return (
    <Container>
      <Options />
      <Quantity />
      <Price />
      <SubmitButton />
    </Container>
  );
}
