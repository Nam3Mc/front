"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";  
import Footer from "@/components/home/footer";  
import LoggedBar from "@/components/home/loggedBar"; 
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token"); 
      setIsLoggedIn(!!token); 
    };

    checkToken(); 

    window.addEventListener("storage", checkToken);

    return () => {
      window.removeEventListener("storage", checkToken);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          {isLoggedIn ? <LoggedBar /> : <Navbar />} 
        </nav>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
