import { Inter } from "next/font/google";
import "@/app/globals.css";
import Nav from "../ui/nav/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IForex Login",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
