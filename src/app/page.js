'use client';

import { useState } from 'react';
import { quotes as initialQuotes} from '@/quotes';

export default function Home() {
  const [quotes, setQuotes] = useState(initialQuotes);
  
  return<main></main>;
}