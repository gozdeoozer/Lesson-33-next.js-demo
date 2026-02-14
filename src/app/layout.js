import { Geist, Geist_Mono } from 'next/font/google';
import { QuotesProvider } from '@/app/QuotesContext';
import { UserProvider } from '@/app/UserContext';
import './globals.css';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Random Quotes App',
  description: 'A simple app that displays random quotes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <QuotesProvider>{children}</QuotesProvider>
        </UserProvider>
      </body>
    </html>
  );
}
