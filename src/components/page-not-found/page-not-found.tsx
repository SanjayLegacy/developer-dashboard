import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const PageNotFound: React.FunctionComponent = memo(() => {
  // hooks
  const navigate = useNavigate();

  const goHome = useCallback(() => navigate("/"), []);

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found.
        </h1>
        <p className="text-muted-foreground mt-6 text-base leading-7">
          Sorry we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            className="bg-primary hover:bg-primary focus-visible:outline-primary/80 rounded-md px-3.5 py-2 text-sm font-semibold shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2"
            onClick={goHome}
          >
            Back to home
          </Button>
        </div>
      </div>
    </main>
  );
});

export default PageNotFound;
