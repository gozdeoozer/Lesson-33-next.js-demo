"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useQuotesContext, useQuotesDispatchContext } from "./QuotesContext";
import { useUserContext } from "./UserContext";

export default function Home() {
  const { quotes, currentIndex } = useQuotesContext();
  const { handleNextQuoteClick } = useQuotesDispatchContext();
  const user = useUserContext();

  const currentQuote = quotes[currentIndex];

  return (
    <main className="min-h-dvh flex items-center justify-center p-6 bg-white text-black dark:bg-black dark:text-white">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>{currentQuote.quote}</CardTitle>
          <CardDescription>{currentQuote.author}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Button onClick={handleNextQuoteClick}>Next Quote</Button>

          {/* şimdilik dursun, sonra kaldırırız */}
          <p className="text-sm opacity-60">Logged user: {user?.name}</p>
        </CardContent>
      </Card>
    </main>
  );
}