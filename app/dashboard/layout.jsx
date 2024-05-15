import { Inter } from "next/font/google";
import "@/app/globals.css";
import Nav from "../ui/nav/nav";
import { getSession } from "@/libs/actions";
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IForex Admin",
  description: "",
};

export default async function RootLayout({ children }) {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect('/login');
  } 

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
