"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import { signUp } from "@/lib/actions/auth";

const Page = () => (
  <AuthForm
    type={"SIGN_UP"}
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      //I AM HERE IF SOMETHING GOES WRONG make universityId: 0,
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={signUp}
  />
);
export default Page;
