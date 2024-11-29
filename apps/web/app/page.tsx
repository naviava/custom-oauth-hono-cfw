"use client";

import { Button } from "@repo/ui/button";
import { client } from "@repo/server";

const oAuthCalls = {
  github: client.api.auth.github.$get,
  google: client.api.auth.google.$get,
};
type OAuthProvider = keyof typeof oAuthCalls;

export default function Home() {
  async function handleOauth(provider: OAuthProvider) {
    if (!oAuthCalls[provider]) alert("Invalid OAuth provider!");
    try {
      // const res = await oAuthCalls[provider]();
      // const data = await res.json();
      // console.log(data);
      window.location.href = "http://127.0.0.1:8787/api/auth/github";
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
