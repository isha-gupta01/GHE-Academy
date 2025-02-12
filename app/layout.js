import "@/globals.css";
import { Karla } from "next/font/google";
// import "@/app/globals.css"; 
import { Ubuntu } from "next/font/google";
import { League_Script } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose the required font weights
  variable: "--font-karla", // Define a CSS variable for Tailwind usage
});
const leagueScript = League_Script({
  subsets: ["latin"],
  weight: ["400"], // Choose the required font weights
  variable: "--font-league-script", // Define a CSS variable for Tailwind usage
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose the required font weights
  variable: "--font-ubuntu", // Define a CSS variable for Tailwind usage
});

export const metadata = {
  title: "GHE Academy",
  description: "School",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${karla.className} ${ubuntu.variable} ${leagueScript.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico"/>
        </head>
      <body
        className={` antialiased`}
      >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
