import { Geist, Geist_Mono , Dancing_Script , Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fleur = Dancing_Script({
  weight: '400', // only weight available for this font
  subsets: ['latin'],
  variable: '--font-fleur',
});

const poppins = Poppins({
  weight: '400', // only weight available for this font
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Kbageja Portfolio",
  description: "A Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fleur.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
