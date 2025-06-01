import { Geist, Geist_Mono, Dancing_Script, Poppins } from "next/font/google";
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
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fleur",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

// ✅ Enhanced SEO metadata
export const metadata = {
  title: "Kinshuk Bageja | Full Stack Developer",
  description: "Welcome to the portfolio of Kinshuk Bageja — Full Stack Developer and Tech Enthusiast.",
  keywords: ["Kinshuk Bageja", "Full Stack Developer", "Portfolio", "React", "Next.js", "MERN"],
  authors: [{ name: "Kinshuk Bageja", url: "https://www.kinshukbageja.me" }],
  creator: "Kinshuk Bageja",
  metadataBase: new URL("https://www.kinshukbageja.me"),
  openGraph: {
    title: "Kinshuk Bageja | Full Stack Developer",
    description: "Explore Kinshuk Bageja’s projects and experience as a developer.",
    url: "https://www.kinshukbageja.me",
    siteName: "Kinshuk Bageja Portfolio",
    images: [
      {
        url: "/titleimg.JPG", // ✅ this should be /public/titleimg (like /public/titleimg.png)
        width: 1200,
        height: 630,
        alt: "Kinshuk Bageja Portfolio",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/titleimg.JPG", // should be /public/titleimg.ico or .png
    shortcut: "/titleimg.JPG",
    apple: "/titleimg.JPG",
  },
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
