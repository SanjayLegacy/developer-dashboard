import Spinner from "@/components/spinner/spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { memo, useState } from "react";
import useAuthHooks from "../hooks/auth-hooks";

export const Signup = memo(() => {
  // state
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // hooks
  const { signUpNewUser, isSignUpLoading } = useAuthHooks();

  const enabled =
    name.length > 0 &&
    email.length > 0 &&
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="confirm_password">Confirm password</Label>
          <Input
            id="confirm_password"
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>
      </div>
      <Button
        disabled={!enabled || isSignUpLoading}
        onClick={() => signUpNewUser(name, email, password)}
        className="w-fit cursor-pointer self-center"
      >
        {isSignUpLoading ? (
          <div className="flex flex-row items-center gap-x-2">
            <Spinner />
            <div>Creating new user...</div>
          </div>
        ) : (
          <>Create new user</>
        )}
      </Button>
    </div>
  );
});
