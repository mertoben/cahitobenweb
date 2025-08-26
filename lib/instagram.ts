const IG_APP_ID = process.env.IG_APP_ID
const IG_CLIENT_TOKEN = process.env.IG_CLIENT_TOKEN

export type OEmbedData = {
  author_name?: string
  author_url?: string
  provider_url?: string
  title?: string
  html?: string
}

export async function fetchInstagramOEmbed(url: string): Promise<OEmbedData | null> {
  try {
    if (!IG_APP_ID || !IG_CLIENT_TOKEN) return null
    const token = `${IG_APP_ID}|${IG_CLIENT_TOKEN}`
    const api = new URL("https://graph.facebook.com/v17.0/instagram_oembed")
    api.searchParams.set("url", url)
    api.searchParams.set("access_token", token)
    const res = await fetch(api.toString(), { next: { revalidate: 3600 } })
    if (!res.ok) return null
    return (await res.json()) as OEmbedData
  } catch {
    return null
  }
}
