export default function HomePage() {
    return (
        <>
            <main className="min-h-screen bg-zinc-950 text-white">
                <section className="mx-auto max-w-4xl px-6 py-32">
                    <h1 className="text-6xl font-bold">
                        Welcome to MyMy&#39;s stories
                    </h1>

                    <p className="mt-6 text-xl text-zinc-400">
                        A little bit of everything, told by MyMy.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="rounded-lg bg-white px-6 py-3 text-black font-medium">
                            Read Blog
                        </button>

                        <button className="rounded-lg border border-zinc-700 px-6 py-3">
                            About Me
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
}
