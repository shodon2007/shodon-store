import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from 'src/app/providers/routes';
import { ReactQuery } from 'src/app/providers/tanstack-query';

const renderWithRouter = (
  initialEntrie: string = '/',
  component: ReactNode = <div></div>,
) => {
  return render(
    <MemoryRouter initialEntries={[initialEntrie]}>
      <ReactQuery>
        {component}
        <AppRouter />
      </ReactQuery>
    </MemoryRouter>,
  );
};

export default renderWithRouter;
