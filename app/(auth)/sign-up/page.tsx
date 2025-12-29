import SignUpForm from "@/features/auth/sign-up-form";
import { requireUnAuth } from "@/lib/auth-utils";
import React from "react";

const SignUp = async () => {
  await requireUnAuth();
  return <SignUpForm />;
};

export default SignUp;
