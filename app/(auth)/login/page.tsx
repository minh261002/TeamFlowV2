import LoginForm from "@/features/auth/login-form";
import { requireUnAuth } from "@/lib/auth-utils";
import React from "react";

const Login = async () => {
  await requireUnAuth();
  return <LoginForm />;
};

export default Login;
