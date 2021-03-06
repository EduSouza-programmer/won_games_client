import Link from "next/link";
import { AccountCircle, Email, Lock } from "@styled-icons/material-outlined";

import Button from "@/components/Button";
import TextField from "@/components/TextField";
import * as S from "./FormSignUp.styles";

function FormSignUp() {
  return (
    <S.Wrapper>
      <form>
        <TextField name="name" placeholder="Name" icon={<AccountCircle />} />
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
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
        />
        <Button size="large" fullWidth>
          Sign up now
        </Button>
        <S.FormLink>
          Already have an account?&nbsp;
          <Link href="/sign-in" passHref>
            <a href="replace">Sign in</a>
          </Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  );
}

export default FormSignUp;
