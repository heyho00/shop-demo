import ProductFormStore from "./ProductFormStore";
import fixtures from "../../fixtures";
// import addProductToCart = jest.fn()

// jest.mock('../services/ApiService', ()=>({
//   get apiService() {
//     return {
//       addProductToCart
//     }
//   }
// }))

const context = describe;

describe("ProductFormStore", () => {
  let store: ProductFormStore;

  beforeEach(() => {
    jest.clearAllMocks();

    store = new ProductFormStore();
  });

  // describe("setProduct", () => {
  //   const [product] = fixtures.products;

  //   it("sets state", () => {
  //     store.setProduct(product);

  //     expect(store.productId).toBe(product.id);
  //     expect(store.options).toHaveLength(product.options.length);
  //     expect(store.selectedOptionItems).toHaveLength(product.options.length);
  //     expect(store.quantity).toBe(1);
  //   });
  // });

  describe("changeQuantity", () => {
    const [product] = fixtures.products;

    // beforeEach(() => {
    //   store.setProduct(product);
    // });

    // context("with correct value", () => {
    //   it("changes quantity", () => {
    //     store.changeQuantity(3);
    //     expect(store.quantity).toBe(3);
    //   });
    // });

    //비즈니스 로직에 대한 테스트는 니가 알아서 해라

    context("when value is less than 1", () => {
      it("doesn't changes quantity", () => {
        store.changeQuantity(-1);
        expect(store.quantity).toBe(1);
      });
    });

    context("when value is greater than 10", () => {
      it("doesn't changes quantity", () => {
        store.changeQuantity(11);
        expect(store.quantity).toBe(1);
      });
    });
  });
});
