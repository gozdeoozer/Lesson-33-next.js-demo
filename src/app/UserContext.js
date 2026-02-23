"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useQuotesContext, useQuotesDispatchContext } from "@app/QuotesContext";
import { useUserContext } from "./QuotesContext";

export default function Home() {
  const { quotes, currentIndex } = useQuotesContext();
  const { handleNextQuoteClick } = useQuotesDispatchContext();
  const user = useUserContext();

  const currentQuote = quotes[currentIndex];

  return (
    <main className="min-h-dvh flex items-center justify-center p-6">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>{currentQuote.quote}</CardTitle>
          <CardDescription>{currentQuote.author}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Button onClick={handleNextQuoteClick}>Next Quote</Button>

          {/* bu satır sadece test: user context çalışıyor mu */}
          <p className="text-sm opacity-60">Logged user: {user?.name}</p>
        </CardContent>
      </Card>
    </main>
  );
}
