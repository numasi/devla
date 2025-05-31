import TRPCResponse from "../types/TData"
import TPost from "../types/TPost"

const whiteList = [
  '/hive-167922/@numasi/the-case-for-hives-emoji-market',
  '/hive-139531/@numasi/mojicap-is-down-but-not-dead'
]

export async function fetchPosts(): Promise<TPost[] | null> {
  try {
    const response = await fetch("https://api.deathwing.me/", {
      body: JSON.stringify({
        'jsonrpc': '2.0',
        'method': 'condenser_api.get_blog',
        'params': ['numasi',0,50],
        'id': 1
      }),
      method: "POST"
    })

    if (!response.ok) {
      throw new Error(`Ouchy response: ${response.status}`)
    }

    const data: TRPCResponse = await response.json()

    const posts: TPost[] = data.result
      .filter( ({ comment: { author }}) => author === 'numasi' )
      .filter( ({ comment: { url, json_metadata }}) => 
        whiteList.includes(url) || 
        JSON.parse(json_metadata).tags.includes('dev')
      )

    return posts

  } catch(e: any) {
    console.error(e.message)
    return null
  }
}