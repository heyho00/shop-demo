import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import LoginForm from "../components/login/LoginForm";

import useSignupFormStore from "../hooks/useSignupFormStore";
import SignupForm from "../components/signup/SignupForm";

export default function SignupPage() {
  const navigate = useNavigate();

  const [{ accessToken }, store] = useSignupFormStore();

  useEffect(() => {
    store.reset();
  }, []);

  useEffect(() => {
    if (accessToken) {
      store.reset();
      navigate("/signup/complete");
    }
  }, [accessToken]);

  return <SignupForm />;
}
