import localFont from "next/font/local";
import "./globals.css";
import NavbarWrapper from "@/components/navbar";
import { ReactQueryClientProvider } from "@/providers/react-query";
import { AuthProvider } from "@/providers/auth";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bug Bank",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryClientProvider>
          <AuthProvider>
            <NavbarWrapper>{children}</NavbarWrapper>
          </AuthProvider>
        </ReactQueryClientProvider>
        {children}
      </body>
    </html>
  );
}