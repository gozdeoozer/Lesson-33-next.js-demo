"use client";

import { createContext, useContext, useState } from "react";
import { quotes as initialQuotes } from "@/quotes";

function getRandomIndex(currentIndex, arrayLength) {
  const random = () => Math.floor(Math.random() * arrayLength);
  const result = random();

  if (result === currentIndex) {
    return getRandomIndex(currentIndex, arrayLength);
  }
  return result;
}

const QuotesContext = createContext(null);
const QuotesDispatchContext = createContext(null);

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleUnlike(quoteToUnlike) {
    setQuotes((prevQuotes) =>
      prevQuotes.map((currentQuote) => {
        if (
          currentQuote.quote === quoteToUnlike.quote &&
          currentQuote.author === quoteToUnlike.author
        ) {
          return { ...currentQuote, likedBy: 0 };
        }
        return currentQuote;
      })
    );
  }

  function handleLike(quoteToLike) {
    setQuotes((prevQuotes) =>
      prevQuotes.map((currentQuote) => {
        if (
          currentQuote.quote === quoteToLike.quote &&
          currentQuote.author === quoteToLike.author
        ) {
          return { ...currentQuote, likedBy: 1 };
        }
        return currentQuote;
      })
    );
  }

  function handleNextQuoteClick() {
    const nextIndex = getRandomIndex(currentIndex, quotes.length);
    setCurrentIndex(nextIndex);
  }

  return (
    <QuotesContext.Provider value={{ quotes, currentIndex }}>
      <QuotesDispatchContext.Provider
        value={{ handleUnlike, handleLike, handleNextQuoteClick }}
      >
        {children}
      </QuotesDispatchContext.Provider>
    </QuotesContext.Provider>
  );
};

// ✅ “Provider yoksa patlasın” diye güvenli hook
export const useQuotesContext = () => {
  const ctx = useContext(QuotesContext);
  if (!ctx) throw new Error("useQuotesContext must be used inside QuotesProvider");
  return ctx;
};

export const useQuotesDispatchContext = () => {
  const ctx = useContext(QuotesDispatchContext);
  if (!ctx)
    throw new Error(
      "useQuotesDispatchContext must be used inside QuotesProvider"
    );
  return ctx;
};