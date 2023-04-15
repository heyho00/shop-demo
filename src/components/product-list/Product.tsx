import styled from "styled-components";
import { ProductSummary } from "../../types";
import numberFormat from "../../utils/numberFormat";

const Thumbnail = styled.img.attrs({
  alt: "Thumbnail",
})`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
`;

const Container = styled.div`
  word-break: keep-all;
`;

type ProductProps = {
  product: ProductSummary;
};

export default function Product({ product }: ProductProps) {
  const { thumbnail, name, price } = product;
  return (
    <Container>
      <Thumbnail src={thumbnail.url} />
      <div>{name}</div>
      <div>{numberFormat(price)}원</div>
    </Container>
  );
}
