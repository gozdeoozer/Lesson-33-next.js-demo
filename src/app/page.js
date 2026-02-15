'use client';

import { Subtitle } from '@/components/Subtitle';
import { Body2 } from '@/components/Body2';
import { Button } from '@/components/Button';
import { useQuotesContext, useQuotesDispatchContext } from '@/app/QuotesContext';
import { useUserContext } from '@/app/UserContext';


export default function Home() {
  const { quotes, currentIndex } = useQuotesContext();
  const { handleNextQuoteClick } = useQuotesDispatchContext();
  const user = useUserContext();

  return (
    <main className='min-h-dvh flex items-center'>
      <div className='w-md mx-auto bg-slate-400 slate-900 dark:bg-slate-700 dark:slate-100 p-10 rounded-md flex flex-col'>
        <Subtitle title={quotes[currentIndex].quote} />
        <Body2>{quotes[currentIndex].author}</Body2>
        <Button onClick={handleNextQuoteClick}>Next Quote</Button>

      </div>
    </main>
  );
}

