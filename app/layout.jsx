import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IForex Admin",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className="md:ml-64">
          {children}
        </div>
      </body>
    </html>
  );
}
