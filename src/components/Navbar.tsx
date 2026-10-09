import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b border-zinc-800">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <h1 className="text-xl font-bold">
                    Stories told by MyMy
                </h1>

                <div className="flex gap-6 text-sm">
                    <a href="/home">Home</a>
                    <a href="/stories">Stories</a>
                    <a href="/about">About Me</a>
                    <a href="/contact">Let&#39;s Talk</a>
                </div>
            </div>
        </nav>
    );
}