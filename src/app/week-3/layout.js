export const metadata = {
    title: "Shopping List",
    description:
        "assignments for cprg306 course - Sourav kumar (week 3 - shopping list)",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
