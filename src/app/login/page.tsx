import FormWrap from "@/components/FormWrap";
import React from "react";
import LoginForm from "./LoginForm";
import { getCurrentuser } from "@/actions/getCurrentUser";

const LoginPage = async () => {
  const currentUser = await getCurrentuser();

  return (
    <div className="container">
      <FormWrap>
        <LoginForm currentUser={currentUser} />
      </FormWrap>
    </div>
  );
};

export default LoginPage;
