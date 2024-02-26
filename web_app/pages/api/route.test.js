import { createMocks } from 'node-mocks-http'
import GET from './route'

describe('/api/route', () => {
  test('returns a route', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    })

    const response = await GET(req, res)

    expect(response.statusCode).toBe(200)

    console.log(response.json())
    expect(await response.json()).toEqual({message: "Hello, world!"})
  })
})