import { useEffect } from "react";
import useProductDetailStore from "../../../hooks/useProductDetailStore";
import useProductFormStore from "../../../hooks/useProductFormStore";
import numberFormat from "../../../utils/numberFormat";
import styled from "styled-components";

const Container = styled.div`
  input {
    margin-block: 0.2rem;
  }
`;

export default function Price() {
  const [{ product }] = useProductDetailStore();
  const [, productFormStore] = useProductFormStore();

  useEffect(() => {
    productFormStore.setProduct(product);
  }, [productFormStore, product]);

  return <Container>{numberFormat(productFormStore.price)}원</Container>;
}
