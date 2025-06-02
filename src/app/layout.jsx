import { Geist, Geist_Mono, Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import * as gtag from "../lib/gtag"; // Adjust path if needed
import Analytics from "../components/Analytics"; // We will create this file


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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Analytics Route Tracker */}
        <Analytics />
        {children}
      </body>
    </html>
  );
}
