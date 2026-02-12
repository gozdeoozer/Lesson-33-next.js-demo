import { Geist, Geist_Mono } from "next/font/google";
import { QuotesProvider } from "@/app/QuotesContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Random Quotes App",
  description: "A simple app to display random quotes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuotesContext.Provider>
          {children}
        </QuotesContext.Provider>
      </body>
    </html>
  );
}
