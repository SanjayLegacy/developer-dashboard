import useAuthHooks from "@/screens/auth-screen/hooks/auth-hooks";
import { memo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface AvatarToggleProps {
  user: string | undefined;
}

export const AvatarToggle = memo((props: AvatarToggleProps) => {
  // props
  const { user } = props;

  // hooks
  const { signOutUser } = useAuthHooks();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <div className="bg-primary text-background flex h-10 w-10 items-center justify-center rounded-full p-2 text-xl font-extralight">
          {user}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => signOutUser()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});
