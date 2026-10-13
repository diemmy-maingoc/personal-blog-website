import { posts } from "@/data/posts";
import Link from "next/link";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white">
            <section className="mx-auto max-w-4xl px-6 py-32">
                <p className="text-zinc-500">
                    Stories told by MyMy
                </p>

                <h1 className="mt-4 text-6xl font-bold leading-tight">
                    Hi, I&#39;m MyMy 👋
                </h1>

                <p className="mt-6 text-xl text-zinc-400">
                    A curious storyteller.
                </p>

                <p className="mt-4 text-lg text-zinc-500">
                    I write about everything which make me feel interesting,
                    and you are reading stories told by MyMy!
                </p>

                <div className="mt-10 flex gap-4">
                    <Link
                        href="/stories"
                        className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
                    >
                        Read Stories
                    </Link>

                    <Link
                        href="/about"
                        className="rounded-lg border border-zinc-700 px-6 py-3 transition hover:border-zinc-500"
                    >
                        About Me
                    </Link>
                </div>
            </section>
            <section className="mx-auto max-w-4xl px-6 pb-24">
                <h2 className="text-3xl font-bold">
                    Recent Stories
                </h2>

                <div className="mt-8 space-y-4">
                    {posts.slice(0, 3).map((post) => (
                        <Link
                            key={post.id}
                            href={`/stories/${post.slug}`}
                            className="block rounded-xl border border-zinc-800 p-4 hover:border-zinc-600"
                        >
                            <h3 className="font-semibold">
                                {post.title}
                            </h3>

                            <p className="mt-1 text-sm text-zinc-500">
                                {post.date}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}