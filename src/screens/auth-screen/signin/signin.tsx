import Spinner from "@/components/spinner/spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import { memo, useState } from "react";
import useAuthHooks from "../hooks/auth-hooks";

export const Signin = memo(() => {
  // state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // hooks
  const { signinUser, isSigninLoading, loginError } = useAuthHooks();

  const enabled = email.length > 0 && password.length > 0;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
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
      </div>

      {loginError && (
        <div className="text-destructive flex flex-row items-center gap-x-2 self-center">
          <Info />
          <div>{loginError}</div>
        </div>
      )}

      <Button
        disabled={!enabled || isSigninLoading}
        onClick={() => signinUser(email, password)}
        className="w-fit cursor-pointer self-center"
      >
        {isSigninLoading ? (
          <div className="flex flex-row items-center gap-x-2">
            <Spinner />
            <div>Signing in...</div>
          </div>
        ) : (
          <>Signin</>
        )}
      </Button>
    </div>
  );
});
