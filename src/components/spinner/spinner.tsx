import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Spinner = (props: SpinnerProps) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        `inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.225em] motion-reduce:animate-[spin_1.5s_linear_infinite]`,
        className,
      )}
      role="status"
      {...rest}
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !border-0 !p-0 !whitespace-nowrap ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default Spinner;
