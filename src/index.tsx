import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import { Html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

import { fetchPosts } from "./services/fetchPosts.ts";
import Layout from "./components/Layout.tsx";
import PostPage from "./components/PostPage.tsx";
import Err from "./components/Err.tsx";

const renderPage = (page: JSX.Element, full: boolean = false) => <Layout {...{page, full}} />

const app = new Elysia()
  .use(html())
  .use(staticPlugin({prefix: ''}))
  .get('/', async () => { 
    const posts = await fetchPosts()
    //console.log(JSON.parse(p.comment.json_metadata).tags))
    if (posts)
      return renderPage( <PostPage { ...{posts} }/> )
    else {
      const message='Hey, but we have an error page, right?'
      return renderPage(<Err {...{message}}/>, true)
    }
  })
  .listen(7000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
