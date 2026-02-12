'use client';


import { Subtitle } from '@/components/Subtitle';
import { Body2 } from '@/components/Body2';




export default function UserQuote() {



  return (
    <main className='min-h-dvh text-center'>
    <h1 className='text-4xl font-bold my-12'>Liked Quotes</h1>
      <div className='w-md mx-auto bg-slate-700 p-10 rounded-md flex flex-col my-6'>
        <Subtitle title="Liked Quote" />
        <Body2>Body of the liked quote</Body2>
      </div>
    </main>
  );
}
