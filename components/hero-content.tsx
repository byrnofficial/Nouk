"use client"

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">✨ Cryptocurrency Investment Labs</span>
        </div>

        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic instrument">AI</span> Driven
          <br />
          <span className="font-light tracking-tight text-white">Trading Strategies</span>
        </h1>

        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          We build, invest and incubate cryptocurrency projects.
        </p>

        <div className="flex items-center gap-3 mt-6">
          <a
            href="https://x.com/noukHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            aria-label="Twitter"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://t.me/aphape"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            aria-label="Telegram"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}
