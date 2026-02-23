import "./globals.css";
import { UserProvider } from "./UserContext";
import { QuotesProvider } from "./QuotesContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <QuotesProvider>{children}</QuotesProvider>
        </UserProvider>
      </body>
    </html>
  );
}

