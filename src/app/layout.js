
import { Inter, Mulish } from "next/font/google";
import "./globals.css";
import styles from './page.module.css'
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Mashori.",
  description: "Personal portfolio website for Thato Mashori",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className={styles.inter}>
        {children}
      </body>
    </html>
  );
}
