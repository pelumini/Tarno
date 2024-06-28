import FormWrap from "@/components/FormWrap";
import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="container">
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </div>
  );
};

export default LoginPage;
