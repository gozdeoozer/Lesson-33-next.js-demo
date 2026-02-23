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

const QuotesContext = createContext([]);
const QuotesDispatchContext = createContext(undefined);

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

export const useQuotesContext = () => useContext(QuotesContext);
export const useQuotesDispatchContext = () => useContext(QuotesDispatchContext);