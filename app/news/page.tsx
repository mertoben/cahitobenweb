import Link from "next/link"
import type { Route } from "next"
import { NEWS } from "@/lib/news"

export const metadata = {
  title: "Haberler — Cahit Oben",
  description: "Duyurular, röportajlar ve basında Cahit Oben.",
}

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Haberler</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {NEWS.map((n) => (
          <article key={n.slug} className="card">
            <div className="text-sm text-zinc-400">{n.date}</div>
            <h2 className="font-semibold">{n.title}</h2>
            <p className="text-zinc-300 mt-1">{n.excerpt}</p>

            <Link
              href={`/news/${n.slug}` as Route}
              className="inline-block mt-2 nav-link"
            >
              Oku →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
