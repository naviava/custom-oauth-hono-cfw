"use client";

import { useState } from "react";

import { Button } from "@repo/ui/button";
import { client } from "@repo/server";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);

  async function handleOauth(provider: "github" | "discord") {
    const res = await fetch(`http://localhost:8787/api/auth/${provider}`);
    const data = await res.json();
    console.log(data);
  }

  return (
    <main className="text-2xl">
      {!!users.length &&
        users.map((user) => (
          <p key={user.id}>
            {user.name} - {user.email}
          </p>
        ))}
      <Button
        variant="outline"
        disabled={status === "loading" || false}
        onClick={() => handleOauth("github")}
        className="text-lg"
      >
        {status === "loading"
          ? "Loading..."
          : status === "authenticated"
            ? "Submit"
            : "Sign in"}
      </Button>
    </main>
  );
}
