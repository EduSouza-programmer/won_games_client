/* eslint-disable jsx-a11y/anchor-is-valid */
import { Email } from "@styled-icons/material-outlined/Email";
import { Lock } from "@styled-icons/material-outlined/Lock";

import Link from "next/link";

import TextField from "@/components/TextField";
import Button from "@/components/Button";
import * as S from "./FormSignIn.styles";

function FormSignIn() {
  return (
    <S.Wrapper>
      <form>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <S.ForgotPassword>
          <a href="#">Forgot your password?</a>
        </S.ForgotPassword>
        <Button size="large" fullWidth>
          Sign in now
        </Button>
        <S.FormLink>
          Don&apos;t have an account?&nbsp;
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  );
}

export default FormSignIn;
