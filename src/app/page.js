"use client";



import { useQuotesContext, useQuotesDispatchContext } from "./QuotesContext";
import { useUserContext } from "./UserContext";

export default function Home() {
  const { quotes, currentIndex } = useQuotesContext();
  const { handleNextQuoteClick } = useQuotesDispatchContext();
  const user = useUserContext();

  const currentQuote = quotes?.[currentIndex];

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md text-center">

        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          {currentQuote.quote}
        </h1>

        <p className="text-gray-500 mb-6">
          — {currentQuote.author}
        </p>

        <button
          onClick={handleNextQuoteClick}
          className="px-6 py-2 bg-black text-white rounded-md hover:opacity-80 transition"
        >
          Next Quote
        </button>

      </div>
    </main>
  );
}