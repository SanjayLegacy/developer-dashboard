import { memo } from "react";
import { ThemeToggle } from "../theme-toggle/theme-toggle";

export const AuthNavbar = memo(() => {
  return (
    <div className="flex flex-row-reverse p-2">
      <ThemeToggle />
    </div>
  );
});
