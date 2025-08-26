import Link from "next/link"
import { ALBUMS } from "@/lib/music"
import { NEWS } from "@/lib/news"

export const metadata = {
  title: "Cahit Oben — Resmi Site",
  description: "Diskografi, haberler ve resim çalışmaları."
}

export default function HomePage(){
  const featuredAlbums = ALBUMS.slice(0,3)
  const featuredNews = NEWS.slice(0,3)

  return (
    <div>
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-semibold">Cahit Oben</h1>
        <p className="text-zinc-300 mt-3 max-w-2xl mx-auto">
          Arşivden çıkan kayıtlar, resim çalışmaları ve güncel haberler.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/discography" className="btn-accent">Diskografi</Link>
          <Link href="/art" className="btn-ghost">Resim Çalışmaları</Link>
        </div>
      </section>

      {/* Diskografi */}
      <section className="mb-12">
        <header className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">Diskografi</h2>
          <Link href="/discography" className="nav-link">Tümü →</Link>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredAlbums.map(a => (
            <article key={a.id} className="card">
              <div className="text-sm text-zinc-400">{a.year ?? ""}</div>
              <h3 className="font-semibold">{a.title}</h3>
              <Link href={`/discography/${a.id}`} className="nav-link mt-2 inline-block">Dinle / İncele →</Link>
            </article>
          ))}
        </div>
      </section>

      {/* Resim Çalışmaları */}
      <section className="mb-12">
        <header className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">Resim Çalışmaları</h2>
          <Link href="/art" className="nav-link">Tümü →</Link>
        </header>
        <article className="card">
          <p className="text-zinc-300">Seriler, açıklamalar ve Instagram’dan seçkiler.</p>
          <Link href="/art" className="inline-block mt-3 nav-link">Keşfet →</Link>
        </article>
      </section>

      {/* Haberler */}
      <section className="mb-12">
        <header className="flex items-end justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-white">Haberler</h2>
          <Link href="/news" className="nav-link">Tümü →</Link>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredNews.map(n => (
            <article key={n.slug} className="card">
              <div className="text-sm text-zinc-400">{n.date}</div>
              <h3 className="font-semibold">{n.title}</h3>
              <p className="text-zinc-300 mt-1">{n.excerpt}</p>
              <Link href={`/news/${n.slug}`} className="nav-link mt-2 inline-block">Oku →</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
