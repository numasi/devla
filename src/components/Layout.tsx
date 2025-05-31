import { Html } from '@elysiajs/html'
import Head from './Head'
import Posts from './PostPage'
import { fetchPosts } from '../services/fetchPosts'
import Err from './Err'

type LayoutProps = {
  page: JSX.Element
  full: Boolean
}

export default function Layout({ page, full }: LayoutProps): JSX.Element {


  return <html lang="en">
  <Head />
  <body style={ full ? { height: '100vh'} : {}}>
    <div class="header">
        <div class="profile-emoji">👾</div>
        <h1>devblog</h1>
        <div>
            <a href="https://github.com/numasi" target="_blank">GitHub</a>
            |
            <a href="" target="_blank">Project</a>
        </div>
    </div>
    {page}
  </body>
  </html>
}