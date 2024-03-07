import { render } from '@testing-library/react'
import AppRouter from './AppRouter'
import { ReactQuery } from '../../tanstack-query'
import { MemoryRouter } from 'react-router-dom'

describe('testing AppRouter.tsx', () => {
  test('Router test', async () => {
    await render(
      <MemoryRouter>
        <ReactQuery>
          <AppRouter />
        </ReactQuery>
      </MemoryRouter>,
    )
  })
})
