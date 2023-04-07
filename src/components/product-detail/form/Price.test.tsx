import { screen } from "@testing-library/react";
import { render } from "../../../test-helpers";
import Price from "./Price";
import fixtures from "../../../../fixtures";
import { container } from "tsyringe";
import ProductFormStore from "../../../stores/ProductFormStore";
import numberFormat from "../../../utils/numberFormat";

const [product] = fixtures.products;
// const { options } = product;

// jest.mock("../../../hooks/useProductDetailStore", () => () => [
//   {
//     product,
//   },
// ]);

// jest.mock("../../../hooks/useProductFormStore", () => () => [
//   {
//     options,
//     selectedOptionItems: options.map((i) => i.items[0]),
//     quantity: 2,
//   },
// ]);

describe("Price", () => {
  const quantity = 2;

  beforeEach(() => {
    const productFormStore = container.resolve(ProductFormStore);
    productFormStore.setProduct(product);
    productFormStore.changeQuantity(quantity);
  });

  it("renders price as formatted number", () => {
    const { container } = render(<Price />);

    const price = numberFormat(product.price * quantity);
    expect(container).toHaveTextContent(`${price}원`);
  });
});
