import FormWrap from "@/components/FormWrap";
import React from "react";
import RegisterForm from "./_components/RegisterForm";
import { getCurrentuser } from "@/actions/getCurrentUser";

const Register = async () => {
  const currentUser = await getCurrentuser();

  return (
    <div className="container">
      <FormWrap>
        <RegisterForm currentUser={currentUser} />
      </FormWrap>
    </div>
  );
};

export default Register;
