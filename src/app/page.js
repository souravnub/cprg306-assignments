import Link from "next/link";

const links = [
    { name: "week-2", href: "/week-2" },
    { name: "week-3", href: "/week-3" },
    { name: "week-4", href: "/week-4" },
];

export default function Home() {
    return (
        <main>
            <h1 className="font-semibold text-xl">
                CPRG 306: Web Development 2 - Assignments
            </h1>
            <ol className="mt-2">
                {links.map((link) => {
                    return (
                        <li key={link.href}>
                            <Link
                                className="text-blue-400 hover:underline"
                                href={link.href}>
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </main>
    );
}
