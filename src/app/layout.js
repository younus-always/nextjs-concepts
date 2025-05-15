import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navber from "./components/Navber";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:"Learning Next JS",
    template: "%s | Learning Next JS"
  },
   keywords: ['Next.js', 'React', 'JavaScript','Learning Next.js'],
  description: "Trying to learn next.js as well as good",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navber />
        <main className="min-h-[calc(100vh-104px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
