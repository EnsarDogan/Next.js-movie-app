import "../styles/reset.css";
import "../styles/global.css";
import { Inter } from "@next/font/google";
import Header from "../containers/header";
import Footer from "../containers/footer";

const InterFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={InterFontFamily.className}>
      <head />
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
