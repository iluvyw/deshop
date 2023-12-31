import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { MetamaskProvider } from "../hooks/useMetamask";
import { Web3Provider } from "../hooks/useWeb3";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DESHOP",
  description: "Built by An Pham",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Web3Provider>
      <MetamaskProvider>
        <html lang="en">
          <body className={inter.className}>
            <Nav />
            {children}
            <ToastContainer position="top-right" autoClose={3000} />
            <Footer />
          </body>
        </html>
      </MetamaskProvider>
    </Web3Provider>
  );
}
