"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/discography", label: "Albümler" },
  { href: "/art", label: "Resim Çalışmaları" },
  { href: "/news", label: "Haberler" },
  { href: "/listen", label: "Dinle" },
  { href: "/contact", label: "İletişim" }
]

export default function SiteHeader(){
  const path = usePathname() || "/"
  return (
    <header className="header">
      <div className="container flex items-center justify-between h-14">
        <Link href="/" className="site-title header-link">
          Cahit Oben
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {items.map(i => {
            const active = path === i.href
            return (
              <Link
                key={i.href}
                href={i.href as any}
                className={active ? "header-link-active" : "header-link"}
              >
                {i.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
