import { memo } from "react";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { AvatarToggle } from "../avatar-toggle/avatar-toggle";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "@/redux/reducers/user-reducer";

export const Navbar = memo(() => {
  const loggedInUser = useSelector(selectLoggedInUser);

  const user = loggedInUser?.email?.charAt(0)?.toUpperCase();
  const userName = loggedInUser?.displayName;

  return (
    <div className="flex flex-row items-center justify-between p-2">
      <div className="text-3xl font-extralight">Welcome {userName}!</div>
      <div className="flex flex-row items-center gap-x-2">
        <ThemeToggle />
        <AvatarToggle user={user} />
      </div>
    </div>
  );
});
