import "@/app/globals.css";  // ✅ Only one CSS import
import { Karla, Ubuntu, League_Script } from "next/font/google";

const karla = Karla({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-karla" });
const leagueScript = League_Script({ subsets: ["latin"], weight: ["400"], variable: "--font-league-script" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-ubuntu" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${karla.className} ${ubuntu.className} ${leagueScript.className}`}>
      <head>
        <title>GHE Academy</title>
        <meta name="description" content="School" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
