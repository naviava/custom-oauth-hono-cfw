"use client";

import { Button } from "@repo/ui/button";
import { client } from "@repo/server";

const oAuthCalls = {
  github: client.api.auth.github.$get,
  discord: client.api.auth.discord.$get,
};
type OAuthProvider = keyof typeof oAuthCalls;

export default function Home() {
  async function handleOauth(provider: OAuthProvider) {
    if (!oAuthCalls[provider]) alert("Invalid OAuth provider!");
    try {
      const res = await oAuthCalls[provider]();
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log("Error >> " + err);
    }
  }

  return (
    <main className="text-2xl">
      <Button
        variant="outline"
        onClick={() => handleOauth("github")}
        className="text-lg"
      >
        Sign-in with Github
      </Button>
    </main>
  );
}
