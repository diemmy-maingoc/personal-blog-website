import { posts } from "@/data/posts";
export default async function StoryPage({
                                            params,
                                        }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const post = posts.find(
        (post) => post.slug === slug
    );

    if (!post) {
        return (
            <main className="min-h-screen bg-zinc-950 p-10 text-white">
                <h1 className="text-4xl font-bold">
                    Story not found
                </h1>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-zinc-950 p-10 text-white">
            <article className="mx-auto max-w-3xl">
                <h1 className="text-5xl font-bold">
                    {post.title}
                </h1>

                <p className="mt-4 text-zinc-500">
                    {post.date} · {post.readTime}
                </p>

                <div className="mt-4 flex gap-2">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                        >
                          #{tag}
                        </span>
                    ))}
                </div>
                <div className="mt-10 border-t border-zinc-800 pt-10">
                    <p className="whitespace-pre-line text-lg leading-relaxed text-zinc-300">
                        {post.content}
                    </p>
                </div>
            </article>
        </main>
    );
}