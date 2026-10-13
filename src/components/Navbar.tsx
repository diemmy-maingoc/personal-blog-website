import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b border-zinc-800">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <h1 className="text-xl font-bold text-white">
                    Stories told by MyMy
                </h1>

                <div className="flex gap-6 text-sm text-zinc-400">
                    <Link
                        href="/"
                        className="transition hover:text-white"
                    >
                        Home
                    </Link>

                    <Link
                        href="/stories"
                        className="transition hover:text-white"
                    >
                        Stories
                    </Link>

                    <Link
                        href="/about"
                        className="transition hover:text-white"
                    >
                        About Me
                    </Link>

                    <Link
                        href="/contact"
                        className="transition hover:text-white"
                    >
                        Let&#39;s Talk
                    </Link>
                </div>
            </div>
        </nav>
    );
}