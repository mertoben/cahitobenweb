// lib/art.ts
export type Artwork = {
  id: string
  title: string
  series?: string
  year?: number
  image: string
  description?: string
  instagram?: string
}

export const ARTWORKS: Artwork[] = [
  {
    id: "dkmuplti",
    title: "Kıyı Soyutu",
    series: "Soyut Seri",
    year: 2024,
    image: "/images/art/dkmuplti.jpg",
    instagram: "https://www.instagram.com/p/DKMUplTIv4E/",
  },
  {
    id: "dkfikgs",
    title: "Geçit",
    series: "Soyut Seri",
    year: 2024,
    image: "/images/art/dkfikgs.jpg",
    instagram: "https://www.instagram.com/p/DKFIkgsIrZe/",
  },
  {
    id: "dhgco7jk",
    title: "Ritim",
    series: "Soyut Seri",
    year: 2024,
    image: "/images/art/dhgco7jk.jpg",
    instagram: "https://www.instagram.com/p/DHgCo7jKiwy/",
  },
  {
    id: "dgcb3qk",
    title: "Katman",
    series: "Soyut Seri",
    year: 2024,
    image: "/images/art/dgcb3qk.jpg",
    instagram: "https://www.instagram.com/p/DGcb3-QKrPO/",
  },
  {
    id: "cupn7jo",
    title: "Soyut Kompozisyon I",
    series: "Soyut",
    year: 2021,
    image: "/images/art/cupn7jo.jpg",
    instagram: "https://www.instagram.com/p/CUpn7joK0Tt/",
  },
  {
    id: "cunjr19",
    title: "Soyut Kompozisyon II",
    series: "Soyut",
    year: 2021,
    image: "/images/art/cunjr19.jpg",
    instagram: "https://www.instagram.com/p/CUnJR19KlHr/",
  },
  {
    id: "cqdkef_",
    title: "Doku Çalışması I",
    series: "Doku",
    year: 2021,
    image: "/images/art/cqdkef_.jpg",
    instagram: "https://www.instagram.com/p/CQdkE_-BjHD/",
  },
  {
    id: "cqdhny_",
    title: "Doku Çalışması II",
    series: "Doku",
    year: 2021,
    image: "/images/art/cqdhny_.jpg",
    instagram: "https://www.instagram.com/p/CQdhny_Bi3w/",
  },
  {
    id: "cpdkhvq",
    title: "Renk Geçişi",
    series: "Renk",
    year: 2021,
    image: "/images/art/cpdkhvq.jpg",
    instagram: "https://www.instagram.com/p/CPdkhvQhlrW/",
  },
  {
    id: "co5bdy7",
    title: "Yüzey",
    series: "Deneysel",
    year: 2021,
    image: "/images/art/co5bdy7.jpg",
    instagram: "https://www.instagram.com/p/CO5BDY7MC51/",
  },
  {
    id: "co2t575",
    title: "Çizgi ve Alan I",
    series: "Çizgi",
    year: 2021,
    image: "/images/art/co2t575.jpg",
    instagram: "https://www.instagram.com/p/CO2t575sqNH/",
  },
  {
    id: "co2tugs",
    title: "Çizgi ve Alan II",
    series: "Çizgi",
    year: 2021,
    image: "/images/art/co2tugs.jpg",
    instagram: "https://www.instagram.com/p/CO2tugsMlJj/",
  },
]
