import Link from "next/link"
import type { Route } from "next"
import { ALBUMS } from "@/lib/music"

export const metadata = {
  title: "Diskografi — Cahit Oben",
  description: "Cahit Oben’in yayımlanmış kayıtları, projeleri ve seçkiler.",
}

export default function DiscographyPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Diskografi</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {ALBUMS.map((a) => (
          <article key={a.id} className="card">
            {a.year ? (
              <div className="text-sm text-zinc-400">{a.year}</div>
            ) : null}
            <h2 className="font-semibold">{a.title}</h2>

            <Link
              href={`/discography/${a.id}` as Route}
              className="inline-block nav-link mt-2"
            >
              Detay →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
