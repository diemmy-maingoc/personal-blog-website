import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <h3 className="text-lg font-semibold text-white">
                    Stories told by MyMy
                </h3>

                <p className="mt-3 max-w-md text-sm text-zinc-500">
                    A little corner of the internet where I
                    share stories, lessons learned and random
                    thoughts from my journey.
                </p>

                <div className="mt-6 flex gap-6 text-sm text-zinc-400">
                    <Link
                        href="/stories"
                        className="hover:text-white"
                    >
                        Stories
                    </Link>

                    <Link
                        href="/about"
                        className="hover:text-white"
                    >
                        About Me
                    </Link>

                    <a
                        href="https://github.com/diemmy-maingoc"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white"
                    >
                        GitHub
                    </a>
                </div>

                <div className="mt-8 border-t border-zinc-800 pt-6 text-sm text-zinc-600">
                    © 2026 Mai Ngoc Diem My
                </div>
            </div>
        </footer>
    );
}