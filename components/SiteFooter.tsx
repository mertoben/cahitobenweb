import Link from "next/link"

export default function SiteFooter(){
  return (
    <footer className="footer mt-16">
      <div className="container py-10 grid md:grid-cols-3 gap-10 text-sm text-zinc-300">
        <div>
          <div className="font-semibold text-white">Site</div>
          <ul className="space-y-2 mt-2">
            <li><Link href="/sitemap" as="/sitemap" className="nav-link">Site Haritası</Link></li>
            <li><Link href="/privacy" className="nav-link">Gizlilik</Link></li>
            <li><Link href="/terms" className="nav-link">Kullanım Şartları</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Sosyal</div>
          <ul className="space-y-2 mt-2">
            <li><a className="nav-link" href="https://open.spotify.com/artist/2O8jY0TevDFs7R9tzkh4SH" target="_blank">Spotify</a></li>
            <li><a className="nav-link" href="https://music.apple.com/tr/artist/cahit-oben/95145871" target="_blank">Apple Music</a></li>
            <li><a className="nav-link" href="https://www.youtube.com/channel/UCWiOnChcc4l8peYF7e0XXfw" target="_blank">YouTube</a></li>
            <li><a className="nav-link" href="https://www.instagram.com/cahitobenart/" target="_blank">Instagram</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">İletişim</div>
          <p className="mt-2">
            Basın ve lisans talepleri için{" "}
            <a className="nav-link" href="mailto:info@example.com">info@example.com</a>
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-zinc-500 py-6 border-t border-zinc-800">
        © {new Date().getFullYear()} Cahit Oben
      </div>
    </footer>
  )
}
