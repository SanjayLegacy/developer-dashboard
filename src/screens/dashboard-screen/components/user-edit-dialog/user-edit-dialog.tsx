import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Developer } from "@/types/developer-model";
import { useState } from "react";
import useDeveloperHooks from "../../hooks/developer-hooks";

interface UserEditDialogProps {
  developer: Developer;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  order: string;
}

export function UserEditDialog(props: UserEditDialogProps) {
  // props
  const { developer, isOpen, setIsOpen, order } = props;

  // state
  const [updatedDeveloper, setUpdatedDeveloper] =
    useState<Developer>(developer);

  // hooks
  const { updateDeveloper } = useDeveloperHooks({
    order: order,
  });

  return (
    <Dialog defaultOpen={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>Modify developer details.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="flex w-full flex-col gap-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={updatedDeveloper.name}
              onChange={(e) => {
                setUpdatedDeveloper({
                  ...updatedDeveloper,
                  name: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex w-full flex-col gap-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={updatedDeveloper.email}
              onChange={(e) => {
                setUpdatedDeveloper({
                  ...updatedDeveloper,
                  email: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex w-full flex-col gap-y-2">
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              value={updatedDeveloper.role}
              onChange={(e) => {
                setUpdatedDeveloper({
                  ...updatedDeveloper,
                  role: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex w-full flex-row gap-x-4">
            <Label htmlFor="status">Status</Label>
            <Input
              id="status"
              type="checkbox"
              className="h-6 w-6"
              checked={updatedDeveloper.status}
              onChange={(e) => {
                setUpdatedDeveloper({
                  ...updatedDeveloper,
                  status: e.target.checked,
                });
              }}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={() => updateDeveloper(updatedDeveloper)}
            >
              Update
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
