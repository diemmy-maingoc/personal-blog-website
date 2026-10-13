import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";

export default function StoriesPage() {
    return (
        <main className="min-h-screen bg-zinc-950 p-10 text-white">
            <h1 className="text-4xl font-bold">
                My Stories
            </h1>

            <div className="mt-8 space-y-6">
                {posts.map((post) => (
                    <BlogCard
                        key={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        slug={post.slug}
                        date={post.date}
                        readTime={post.readTime}
                    />

                ))}
            </div>
        </main>
    );
}
