
import { createContext } from 'react';
import { quotes as initialQuotes } from '@/quotes';

export const QuotesContext = createContext([]);

export const QuotesProvider = ({ children }) => {
  return (
    <QuotesContext.Provider value = {initialQuotes}>
      {children}
    </QuotesContext.Provider>
  )
}
