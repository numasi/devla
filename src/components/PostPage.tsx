import { Html } from '@elysiajs/html'
import TPost from '../types/TPost'
import Post from './Post'

export type PostPageProps = { 
  posts: TPost[]
}

export default function PostPage ({ posts }: PostPageProps) {
  return <div class="container">
      { posts.map(p => <Post {...p} />) }
    </div>
}