import Image from "next/image"
import Link from "next/link"
import type { Route } from "next"
import { ARTWORKS } from "@/lib/art"

export const metadata = {
  title: "Resim Çalışmaları — Cahit Oben",
  description: "Seriler, açıklamalar ve Instagram’dan seçkiler.",
}

export default function ArtPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Resim Çalışmaları</h1>
        <p className="text-zinc-300 mt-3 max-w-2xl mx-auto">
          Serilerden seçkiler ve kısa notlar. Her görsele tıklayarak Instagram gönderisine gidebilirsiniz.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTWORKS.map(w => (
          <article key={w.id} className="card overflow-hidden">
            <Link
              href={(w.instagram ?? "#") as Route}
              target={w.instagram ? "_blank" : undefined}
              className="block"
            >
              <div className="relative w-full aspect-[4/3] bg-zinc-800">
                <Image
                  src={w.image}
                  alt={w.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
            </Link>

            <div className="p-4">
              <h2 className="font-semibold">{w.title}</h2>
              {(w.series || w.year) && (
                <div className="text-xs text-zinc-500 mt-1">
                  {[w.year, w.series].filter(Boolean).join(" • ")}
                </div>
              )}
              {w.description && (
                <p className="text-sm text-zinc-300 mt-2">{w.description}</p>
              )}
              {w.instagram && (
                <Link
                  href={w.instagram as Route}
                  target="_blank"
                  className="nav-link mt-3 inline-block"
                >
                  Instagram’da Gör →
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
