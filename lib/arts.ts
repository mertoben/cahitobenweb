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
    description: "Bu tablo İLK BİZ VARDIK serisi içindeki bir başka çalışmam. Yalnızca bir halkın tarihine değil, insanlığın vicdanına, da bir bakış sunar. Unutulanları hatırlamak, sesi kısılanlara kulak vermek ve biz buradaydık diyenlerin yankılarına ortak olmak için…",
    instagram: "https://www.instagram.com/p/DKMUplTIv4E/",
  },
  {
    id: "dkfikgs",
    title: "Yol",
    series: "Soyut Seri",
    year: 2024,
    image: "/images/art/dkfikgs.jpg",
    description: "Eser Adı: İLK BİZ VARDIK. Teknik Karışık teknik kağıt üzerine akrilik Yıl 1986. 1986 yılında yapmayı düşündüğüm bir resim ile, Amerika kıtasının gerçek ilk sahipleri olan Kızılderililere bir saygı duruşu niteliğinde , tarihin unutulmuş seslerini yeniden görünür kılmayı amaçlamış ve “İlk Biz Vardık” ile, üç ayrı yüz üzerinden bir halkın geçmişini, acılarını ve bugünkü kimlik mücadelesini anlatmak istemiştim. Bu 25x35 kağıt üzerine akrilik ağırlıklı, karışık teknik yaptığım resim, İLK BİZ VARDIK serisinin ilki olarak kendi resim koleksiyonumda önemli bir yere sahip.",
    instagram: "https://www.instagram.com/p/DKFIkgsIrZe/",
  },
  {
    id: "dhgco7jk",
    title: "Geçit",
    series: "Peyzaj Soyut",
    year: 2024,
    image: "/images/art/dhgco7jk.jpg",
    description: "Işık–gölge karşıtlığıyla mekânsal derinlik.",
    instagram: "https://www.instagram.com/p/DHgCo7jKiwy/",
  },
  {
    id: "dgcb3qk",
    title: "Izgara",
    series: "Yapısal",
    year: 2024,
    image: "/images/art/dgcb3qk.jpg",
    description: "Geometrik ağ üzerinde ton varyasyonları.",
    instagram: "https://www.instagram.com/p/DGcb3-QKrPO/",
  },
  // İstersen diğer IG linklerini aynı formatta ekleyebilirsin
]
