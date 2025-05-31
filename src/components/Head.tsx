import { Html } from '@elysiajs/html'
export default function Head(): JSX.Element {
  return (
    <head>
      <script src="https://unpkg.com/htmx.org@2.0.4"></script>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href={`./style.css?${Math.random()}`} />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>devla</title>
    </head>
  )
}