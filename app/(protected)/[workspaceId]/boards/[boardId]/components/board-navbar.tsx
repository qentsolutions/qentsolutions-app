"use client";

import { Board } from "@prisma/client";
import { BoardTitleForm } from "./board-title-form";
import { BoardOptions } from "./board-options";
import { useBreadcrumbs } from "@/hooks/use-breadcrumb";
import { useEffect } from "react";
import { useCurrentWorkspace } from "@/hooks/use-current-workspace";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BoardNavbarProps {
  board: Board;
}

export const BoardNavbar = ({ board }: BoardNavbarProps) => {
  const { setBreadcrumbs } = useBreadcrumbs();
  const { currentWorkspace } = useCurrentWorkspace();

  useEffect(() => {
    setBreadcrumbs([
      { label: "Boards", href: `/${currentWorkspace?.id}/boards` },
      { label: board.title },
    ]);
  }, [board, setBreadcrumbs]);


  if (!board) return null;


  return (
    <div className="flex items-center justify-between" >
      <div className="flex items-center">
        <Avatar className="h-10 w-10 mr-2">
          <AvatarImage
            src={`https://avatar.vercel.sh/${board.id}.png`}
            alt={board.title}
          />
          <AvatarFallback>{board.title.charAt(0)}</AvatarFallback>
        </Avatar>
        <BoardTitleForm data={board} />
      </div>
      <div className="ml-2">
        <BoardOptions boardId={board.id} />
      </div>
    </div>
  );
};