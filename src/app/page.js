import Link from "next/link";

const links = [{ name: "week-2", href: "/week-2" }];

export default function Home() {
    return (
        <main>
            <h1 className="font-semibold text-xl">
                CPRG 306: Web Development 2 - Assignments
            </h1>
            <ol className="mt-2">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.href}
                            className="text-blue-400 hover:underline"
                            href={link.href}>
                            {link.name}
                        </Link>
                    );
                })}
            </ol>
        </main>
    );
}
