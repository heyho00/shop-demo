import { container } from "tsyringe";
import SignupFormStore from "../stores/SignupFormStore";
import { useStore } from "usestore-ts";

export default function useSignupFormStore() {
  const store = container.resolve(SignupFormStore);
  return useStore(store);
}
