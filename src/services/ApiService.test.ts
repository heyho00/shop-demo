import { apiService } from "./ApiService";

test("createOrder", async () => {
  apiService.setAccessToken("ACCESS-TOKEN");

  // await apiService.createOrder({
  //   receiver: {
  //     name: "홍길동",
  //     address1: "서울시 성동구",
  //     address2: "22호",
  //     postalCode: "9303",
  //     phoneNumber: "01092929292",
  //   },
  //   payment: {
  //     merchantId: "fdafsd ",
  //     transactionId: "123123791242",
  //   },
  // });
});
