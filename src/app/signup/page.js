export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-950">
      <div className="w-full max-w-md bg-white dark:bg-neutral-900 p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-neutral-900 dark:text-neutral-50">
          Sign Up
        </h1>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm text-neutral-700 dark:text-neutral-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm text-neutral-700 dark:text-neutral-300">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}