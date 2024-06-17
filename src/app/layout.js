import { Inter } from "next/font/google";
import "./globals.css";
import RecoilProvider from "@/providers/recoilProvider";
import QueryProvider from "@/providers/queryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "cprg306 assignments",
    description: "assignments for cprg306 course - Sourav kumar",
};

export default function RootLayout({ children }) {
    return (
        <RecoilProvider>
            <QueryProvider>
                <html lang="en">
                    <body className={`${inter.className}`}>{children}</body>
                </html>
            </QueryProvider>
        </RecoilProvider>
    );
}
