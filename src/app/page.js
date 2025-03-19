import Image from "next/image";
import tailwind from "tailwindcss";

export default function Home() {
    return (
    <body class="bg-gray-100 font-sans m-0 p-0">

    <header class="bg-white p-5 flex justify-between items-center border-b border-gray-300">
        <div class="font-bold text-2xl">Kian</div>
        <nav class="flex gap-5">
            <a href="home.html" class="text-black text-sm py-2 px-3 rounded hover:bg-teal-100">HOME</a>
            <a href="ueber.html" class="text-black text-sm py-2 px-3 rounded hover:bg-teal-100">ÜBER</a>
            <a href="portfolio.html" class="text-black text-sm py-2 px-3 rounded hover:bg-teal-100">PORTFOLIO</a>
            <a href="news.html" class="text-black text-sm py-2 px-3 rounded hover:bg-teal-100">NEWS</a>
            <a href="kontakt.html" class="text-black text-sm py-2 px-3 rounded hover:bg-teal-100">KONTAKT</a>
        </nav>
    </header>

    <main class="p-12">
        <article class="flex gap-10 border-b border-gray-300 pb-5">
            <section class="max-w-md">
                <h1 class="text-4xl font-bold">Hi! Ich bin <strong>Kian</strong>.</h1>
                <p class="text-xl mt-5 mb-10 leading-relaxed">Schön, dass du auf meiner Webseite gelandet bist. <br/>Auf
                    dieser Webseite findest du verschiedene <br/>Projekte und Informationen über mich.</p>
                <div class="flex gap-5">
                    <a href="ueber.html"
                       class="inline-block border-2 border-black py-2 px-6 text-black text-sm hover:bg-teal-100">ÜBER
                        MICH →</a>
                    <a href="portfolio.html"
                       class="inline-block border-2 border-black py-2 px-6 text-black text-sm hover:bg-teal-100">PORTFOLIO
                        →</a>
                </div>
            </section>
        </article>
    </main>

    <footer class="p-5 text-center text-sm bg-white">
    </footer>

    </body>
)
    ;
}
