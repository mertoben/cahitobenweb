"use client"

import { useState } from "react"

type Tab = "spotify" | "apple" | "youtube"

const IFRAME = {
  spotify: 'https://open.spotify.com/embed/artist/2O8jY0TevDFs7R9tzkh4SH?utm_source=generator',
  apple: 'https://embed.music.apple.com/tr/artist/cahit-oben/95145871',
  youtube: 'https://www.youtube.com/embed?listType=search&list=Cahit%20Oben'
}

export default function ListenTabs(){
  const [active, setActive] = useState<Tab>("spotify")
  const base = "px-4 py-2 rounded-full text-sm md:text-base transition"
  const on = "bg-accent text-accent-fg"
  const off = "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {(["spotify","apple","youtube"] as Tab[]).map(t => (
          <button
            key={t}
            onClick={()=>setActive(t)}
            className={`${base} ${active===t ? on : off}`}
            aria-pressed={active===t}
          >
            {t[0].toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800">
        <iframe
          key={active}
          className="w-full h-full"
          src={IFRAME[active]}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  )
}
