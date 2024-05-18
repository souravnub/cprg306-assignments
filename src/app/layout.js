import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "cprg306 assignments",
    description: "assignments for cprg306 course - Sourav kumar",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} dark:bg-black light:bg-white dark:text-white light:text-black container px-2`}>
                {children}
            </body>
        </html>
    );
}
