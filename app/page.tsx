"use client";

import { useState } from "react";
import NavBar from "./NavBar";
import StatementCategory from "./components/StatementCategory";
import StatementTable from "./components/StatementTable";
import { StatementTracker } from "@/schema/statement";
import { dummyStatements } from "@/data/statement";

export default function Home() {
  const [statements, setStatements] =
    useState<StatementTracker[]>(dummyStatements);

  const handleAddStatement = (data: StatementTracker) => {
    setStatements((prev) => [...prev, data]);
  };

  return (
    <main>
      <NavBar />
      <div className="grid grid-cols-2 mx-auto w-full justify-items-center items-center">
        <StatementCategory onAddStatement={handleAddStatement} />
        {statements.length > 0 ? (
          <StatementTable statement={statements} />
        ) : (
          <p className="text-center text-gray-500">No statements yet</p>
        )}
      </div>
    </main>
  );
}
