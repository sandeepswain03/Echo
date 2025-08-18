"use client"

import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <p>apps/web</p>
        <pre>{JSON.stringify(users)}</pre>
        <button onClick={() => addUser()}>Add User</button>
      </div>
    </div>
  );
}
