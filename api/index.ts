import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge'
}

const app = new Hono();

app.get('/', (c) => {
  return c.text('API is running')
})

export default handle(app)
