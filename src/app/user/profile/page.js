'use client';

import { useUserContext } from '@/app/UserContext';

export default function ProfilePage() {
  const user = useUserContext();

  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-700 p-10 rounded-md text-center">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <p className="mb-2">Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </main>
  );
}
