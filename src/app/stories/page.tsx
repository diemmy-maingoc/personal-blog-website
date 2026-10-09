import BlogCard from "@/components/BlogCard";

export default function StoriesPage() {
    const posts = [
        {
            id: 1,
            slug: "my-first-blog-post",
            title: "My First Blog Post",
            excerpt: "This is where future stories will live.",
        },
        {
            id: 2,
            slug: "learning-next-js",
            title: "Learning Next.js",
            excerpt: "Building MyMy's Stories from scratch.",
        },
        {
            id: 3,
            slug: "life-at-fpt-university",
            title: "Life at FPT University",
            excerpt: "Thoughts and experiences from university life.",
        },
    ];

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
                    />
                ))}
            </div>
        </main>
    );
}
