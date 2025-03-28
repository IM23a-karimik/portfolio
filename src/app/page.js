import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      {/* Header */}
      <header className="bg-white p-5 flex justify-between items-center shadow-md">
        <div className="font-bold text-2xl text-gray-800">Kian</div>
        <nav className="flex gap-5">
          {[
            { name: "HOME", href: "home.html" },
            { name: "ÜBER", href: "ueber.html" },
            { name: "PORTFOLIO", href: "portfolio.html" },
            { name: "NEWS", href: "news.html" },
            { name: "KONTAKT", href: "kontakt.html" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 text-sm py-2 px-4 rounded-lg transition duration-200 hover:bg-teal-500 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center p-12">
        <Image
          src="/hero-image.jpg"
          width={600}
          height={400}
          alt="Hero Image"
          className="rounded-lg shadow-lg"
        />
        <h1 className="text-5xl font-bold text-gray-900 mt-6">Hi! Ich bin Kian.</h1>
        <p className="text-xl mt-4 text-gray-600 max-w-2xl leading-relaxed">
          Schön, dass du hier bist! Auf meiner Webseite findest du meine Projekte und mehr über mich.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="ueber.html"
            className="border-2 border-black py-2 px-6 text-black text-sm rounded-lg transition duration-200 hover:bg-black hover:text-white"
          >
            ÜBER MICH →
          </a>
          <a
            href="portfolio.html"
            className="border-2 border-black py-2 px-6 text-black text-sm rounded-lg transition duration-200 hover:bg-black hover:text-white"
          >
            PORTFOLIO →
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-5 text-center text-gray-500 text-sm bg-white border-t border-gray-300 mt-12">
        © 2025 Kian. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
