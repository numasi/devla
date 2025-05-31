import { Html } from '@elysiajs/html'

type ErrorProps = {
  message: string
}

export default function Err ({ message }: ErrorProps ): JSX.Element {
  return (
    <div class="error-container">
      <div class="emoji">💥</div>
      <div class="glitch">Whopsie</div>
      <p>{ message }</p>
    </div>
  )
}