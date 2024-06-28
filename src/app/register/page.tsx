import FormWrap from "@/components/FormWrap";
import React from "react";
import RegisterForm from "./_components/RegisterForm";

const Register = () => {
  return (
    <div className="container">
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </div>
  );
};

export default Register;
