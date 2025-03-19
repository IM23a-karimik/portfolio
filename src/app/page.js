import Image from "next/image";
import tailwind from "tailwindcss";

export default function Home() {
    return (
    <body className="bg-gray-100 font-sans m-0 p-0">

    <header className="bg-white p-5 flex justify-between items-center border-b border-gray-300">
        <div className="font-bold text-2xl">Kian</div>
        <nav className="flex gap-5">
            <a href="home.html" className="text-black text-sm py-2 px-3 rounded hover:bg-teal-100">HOME</a>
            <a href="ueber.html" className="text-black text-sm py-2 px-3 rounded hover:bg-teal-100">ÜBER</a>
            <a href="portfolio.html" className="text-black text-sm py-2 px-3 rounded hover:bg-teal-100">PORTFOLIO</a>
            <a href="news.html" className="text-black text-sm py-2 px-3 rounded hover:bg-teal-100">NEWS</a>
            <a href="kontakt.html" className="text-black text-sm py-2 px-3 rounded hover:bg-teal-100">KONTAKT</a>
        </nav>
    </header>

    <main className="p-12">
        <article className="flex gap-10 border-b border-gray-300 pb-5">
            <section className="max-w-md">
                <h1 className="text-4xl font-bold">Hi! Ich bin <strong>Kian</strong>.</h1>
                <p className="text-xl mt-5 mb-10 leading-relaxed">Schön, dass du auf meiner Webseite gelandet bist. <br/>Auf
                    dieser Webseite findest du verschiedene <br/>Projekte und Informationen über mich.</p>
                <div className="flex gap-5">
                    <a href="ueber.html"
                       className="inline-block border-2 border-black py-2 px-6 text-black text-sm hover:bg-teal-100">ÜBER
                        MICH →</a>
                    <a href="portfolio.html"
                       className="inline-block border-2 border-black py-2 px-6 text-black text-sm hover:bg-teal-100">PORTFOLIO
                        →</a>
                </div>
            </section>
        </article>
    </main>

    <footer className="p-5 text-center text-sm bg-white">
    </footer>

    </body>
)
    ;
}
