import Spinner from "@/components/spinner/spinner";
import { cn } from "@/lib/utils";
import {
  selectDevelopers,
  selectFetchingDevelopers,
} from "@/redux/reducers/developer-reducer";
import type { Developer } from "@/types/developer-model";
import { ArrowDown, ArrowUp, Pencil } from "lucide-react";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { UserEditDialog } from "../user-edit-dialog/user-edit-dialog";

interface DeveloperTableProps {
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}

export const DeveloperTable = memo((props: DeveloperTableProps) => {
  // props
  const { order, setOrder } = props;

  // state
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [developer, setDeveloper] = useState<Developer | undefined>(undefined);

  // selectors
  const fetchingDevelopers = useSelector(selectFetchingDevelopers);
  const developers = useSelector(selectDevelopers);

  if (fetchingDevelopers) {
    return (
      <div className="border-border flex h-full max-h-[50%] w-full flex-1 flex-col items-center justify-center rounded-xl border">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="border-border flex h-full max-h-[50%] w-full flex-1 flex-col overflow-x-auto overflow-y-auto rounded-xl border">
        <table>
          <thead>
            <tr className="border-border border-b">
              <th className="border-border flex flex-row items-center justify-center gap-x-2 border-r">
                <div>Name</div>
                {order === "asc" ? (
                  <ArrowUp
                    className="cursor-pointer"
                    onClick={() => setOrder("desc")}
                  />
                ) : (
                  <ArrowDown
                    className="cursor-pointer"
                    onClick={() => setOrder("asc")}
                  />
                )}
              </th>
              <th className="border-border border-r">Email</th>
              <th className="border-border border-r">Role</th>
              <th className="border-border border-r">Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {developers.map((developer: Developer) => (
              <tr key={developer.id} className="border-border border-b">
                <td className="border-border border-r p-2 text-nowrap whitespace-nowrap">
                  {developer.name}
                </td>
                <td className="border-border border-r p-2 text-nowrap whitespace-nowrap">
                  {developer.email}
                </td>
                <td className="border-border border-r p-2 text-nowrap whitespace-nowrap">
                  {developer.role}
                </td>
                <td
                  className={cn(
                    "border-border border-r p-2 text-nowrap whitespace-nowrap",
                    {
                      "text-green-600": developer.status === true,
                      "text-destructive": developer.status === false,
                    },
                  )}
                >
                  {developer.status ? "Active" : "Inactive"}
                </td>
                <td className="flex flex-col items-center justify-center p-2 text-nowrap whitespace-nowrap">
                  <Pencil
                    onClick={() => {
                      setIsDialogOpen(true);
                      setDeveloper(developer);
                    }}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isDialogOpen && developer && (
        <UserEditDialog
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
          developer={developer}
          order={order}
        />
      )}
    </>
  );
});
