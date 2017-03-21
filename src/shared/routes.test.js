import { helloEndPointRoute } from './routes'

test('helloEndPointRoute', () => {
  expect(helloEndPointRoute()).toBe('/ajax/hello/:num')
  expect(helloEndPointRoute(1234)).toBe('/ajax/hello/1234')
})
