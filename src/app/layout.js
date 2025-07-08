import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/global/navigation";
import { CustomThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Connect Your Thoughts",
  description: "A platform for connecting thoughts and ideas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CustomThemeProvider>
          <Navigation/>
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
