import useProductFormStore from "../../../hooks/useProductFormStore";
import numberFormat from "../../../utils/numberFormat";
import styled from "styled-components";

const Container = styled.div`
  input {
    margin-block: 0.2rem;
  }
`;

export default function Price() {
  const [, productFormStore] = useProductFormStore();

  return <Container>{numberFormat(productFormStore.price)}원</Container>;
}
