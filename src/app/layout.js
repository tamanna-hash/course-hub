import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
const inter = Inter({
  weight: ["100", "200", "300", "500", "600", "800"],
});
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
    default: "CourseHub | Learn AI, Web Development & More",
    template: "%s | CourseHub",
  },
  description:
    "Join CourseHub to explore online courses in AI, Web Development, Business Analytics, and more. Learn from expert instructors and boost your career.",
  metadataBase: new URL("https://course-hub-ashy.vercel.app"),
  openGraph: {
    title: "CourseHub | Learn AI, Web Development & More",
    description:
      "Join CourseHub to explore online courses in AI, Web Development, Business Analytics, and more.",
    url: "https://course-hub-ashy.vercel.app",
    siteName: "CourseHub",
    images: [
      {
        url: "https://i.ibb.co.com/K8xhKYZ/Screenshot-2026-01-16-214408.png",
        width: 1200,
        height: 630,
        alt: "CourseHub Home Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CourseHub | Learn AI, Web Development & More",
    description:
      "Join CourseHub to explore online courses in AI, Web Development, Business Analytics, and more.",
    images: [
      "https://i.ibb.co.com/K8xhKYZ/Screenshot-2026-01-16-214408.png",
    ],
    creator: "@your_twitter_handle",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header className="max-w-11/12 mx-auto">
          <Navbar />
        </header>
        <main className="max-w-11/12 mx-auto min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
