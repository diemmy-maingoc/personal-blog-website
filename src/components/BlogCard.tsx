import Link from "next/link";

type BlogCardProps = {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    readTime: string;
};

export default function BlogCard({
                                     title,
                                     excerpt,
                                     slug,
                                     date,
                                     readTime,
                                 }: BlogCardProps) {
    return (
        <Link href={`/stories/${slug}`}>
            <article className="rounded-xl border border-zinc-800 p-6 transition hover:border-zinc-600 hover:bg-zinc-900">
                <h2 className="text-2xl font-semibold">
                    {title}
                </h2>

                <p className="text-sm text-zinc-500">
                    {date} · {readTime}
                </p>

                <p className="mt-4 text-zinc-400">
                    {excerpt}
                </p>
            </article>
        </Link>
    );
}