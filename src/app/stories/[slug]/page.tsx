export default async function StoryPage({
                                            params,
                                        }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <main className="min-h-screen bg-zinc-950 p-10 text-white">
            <h1 className="text-4xl font-bold">
                {slug}
            </h1>

            <p className="mt-4 text-zinc-400">
                This is a dynamic story page.
            </p>
        </main>
    );
}