"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function NavBar() {
  const { user } = useKindeBrowserClient();
  return (
    <nav className="w-full p-4 bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link href="/">Statement Tracker</Link>
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <LogoutLink>Logout</LogoutLink>
            </Button>
            <p>{user?.given_name}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
