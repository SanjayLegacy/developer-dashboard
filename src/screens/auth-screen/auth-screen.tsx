import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthHooks from "./hooks/auth-hooks";
import { Signin } from "./signin/signin";
import { Signup } from "./signup/signup";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "@/redux/reducers/user-reducer";

export const AuthScreen = memo(() => {
  // hooks
  const { setLoggedIn } = useAuthHooks();
  const navigate = useNavigate();

  const loggedInUser = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (loggedInUser) {
      setLoggedIn(true);
      navigate("/dashboard");
    } else {
      setLoggedIn(false);
      navigate("/auth");
    }
  }, [loggedInUser]);

  return (
    <div className="flex h-screen w-screen flex-1 flex-col items-center justify-center p-2">
      <Tabs
        defaultValue="signin"
        className="border-border w-full max-w-lg rounded-md border p-2 shadow-sm"
      >
        <div className="flex items-center justify-center text-3xl font-extralight">
          Developer Dashboard
        </div>
        <TabsList className="w-full">
          <TabsTrigger value="signin" className="cursor-pointer">
            Signin
          </TabsTrigger>
          <TabsTrigger value="signup" className="cursor-pointer">
            Signup
          </TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Signin />
        </TabsContent>
        <TabsContent value="signup">
          <Signup />
        </TabsContent>
      </Tabs>
    </div>
  );
});
