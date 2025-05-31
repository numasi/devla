import { Html } from '@elysiajs/html'
import TPost from '../types/TPost'
import showdown from 'showdown'

export default function Post (props: TPost) {
  console.log(props.comment.created)

  const converter = new showdown.Converter()
  const html = converter.makeHtml(props.comment.body)

  return (
  <article>
    <h1>{props.comment.title}</h1>
    <span class="date">{props.comment.created}</span>
    <div class="body">{html}</div>
  </article>
  )
}