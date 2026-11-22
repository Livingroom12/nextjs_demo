// The root layout wraps EVERY page. It runs on the server.
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Simple Next.js App",
  description: "A small Next.js project with no database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}