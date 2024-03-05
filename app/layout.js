import { cookies } from "next/headers";
import Header from "./components/common/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Cursor from "./components/common/cursor";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Mehmet Akif Ozdemir",
  description: "Mehmet Akif Ozdemir personal portfolio web site",
};

export default function RootLayout({ children }) {
  const theme = cookies().get("theme")?.value || "light";
  return (
    <html lang="en" className={theme}>
      <body
        className={`${inter.className} transition-none lg:transition-colors dark:bg-zinc-900 dark:text-white `}
      >
        <Cursor />
        <Header theme={theme} />
        <main className="px-8 sm:px-16 md:px-36 xl:px-48 2xl:px-52 3xl:px-72 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ">
          {children}
        </main>
      </body>
    </html>
  );
}
