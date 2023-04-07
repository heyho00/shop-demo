import styled from "styled-components";
import { Image as ImageType } from "../../types";

const Image = styled.img.attrs({
  alt: 'Product Image',
})`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
`;

type ImagesProps = {
  images: ImageType[];
}

export default function Images({ images }: ImagesProps) {
  const [image] = images;

  if (!image) {
    return null;
  }

  return (
    <Image src={image.url} />
  );
}