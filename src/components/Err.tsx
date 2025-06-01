import { Html } from '@elysiajs/html'

export type ErrPageProps = {
  message: string
}

export default function Err ({ message }: ErrPageProps ): JSX.Element {
  return (
    <div class="error-container">
      <div class="emoji">💥</div>
      <div class="glitch">Whopsie</div>
      <p>{ message }</p>
    </div>
  )
}