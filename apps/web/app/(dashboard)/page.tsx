"use client";

import { useMutation, useQuery } from "convex/react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            <OrganizationSwitcher hidePersonal={true} />
            <UserButton />
          </div>
        </header>

        <main className="flex items-center justify-center min-h-[calc(100vh-88px)]">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mx-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome to Your App
              </h2>
              <p className="text-gray-600">
                Manage your users and explore the platform
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Users
                </h3>
                <div className="bg-white rounded border p-3 font-mono text-sm max-h-40 overflow-auto">
                  {users ? JSON.stringify(users, null, 2) : "Loading..."}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => addUser()}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Add New User
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
