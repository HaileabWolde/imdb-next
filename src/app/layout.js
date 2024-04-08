import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar"
import Provider from "./Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB clone",
  description: "this is a movide database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header/>
          <Navbar/>
          {children}
        </Provider>
       
        </body>
    </html>
  );
}
