"use client";

import { useBreadcrumbs } from "@/hooks/use-breadcrumb";
import { BoardList } from "./components/board-list";
import { useEffect } from "react";

const BoardPage = () => {
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs([{ label: "Boards" }]);
  }, [setBreadcrumbs]);

  return (
    <div className="w-full mb-20">
      <div className="px-2 md:px-4 w-full">
        <BoardList />
      </div>
    </div>
  );
};

export default BoardPage;
