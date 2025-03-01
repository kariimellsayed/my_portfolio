import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const livvicFont = Livvic({
  variable: "--font-livvic",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Karim's Portfolio",
  description: "Karim Elsayed Portfolio By JsMastery",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${livvicFont.variable}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
