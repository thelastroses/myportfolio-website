import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import SliderComponent from "./components/SliderComponent";
import { ThemeProvider } from "next-themes";
import Providers from "./providers";
import ScrollToTop from "./components/ScrollToTop"; 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jennifer Spencer's Portfolio",
  description: "Personal portfolio built with Next.js",
  keywords: "Next.js, React, JavaScript",
  author:"Jennifer Spencer",
  icons: {
    icon: [
      {
        url: '/f1b06321-424d-49cb-a5d9-e26abbcace0b.jpg',
        href: '/f1b06321-424d-49cb-a5d9-e26abbcace0b.jpg',
      },
      
    ],
  },
};

export default function RootLayout({ children }) {
  return (
  <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ScrollToTop/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
    
  );
}
