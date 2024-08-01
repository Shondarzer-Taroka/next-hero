import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:{
    default:'Next Hero',
    template:'%s | Next Hero'
  },
  description: "Supper powerful next website",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        <div >
          {children}
        </div>

        <footer className="bg-black text-white text-center">this footer</footer>
      </body>
    </html>
  );
}
