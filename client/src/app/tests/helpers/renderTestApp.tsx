import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from 'src/app/providers/redux';
import { AppRouter } from 'src/app/providers/routes';
import { ReactQuery } from 'src/app/providers/tanstack-query';

const renderTestApp = (
	initialEntrie: string = '/',
	component: ReactNode = <div></div>,
) => {
	return render(
		<MemoryRouter initialEntries={[initialEntrie]}>
			<Provider store={store}>
				<ReactQuery>
					{component}
					<AppRouter />
				</ReactQuery>
			</Provider>
		</MemoryRouter>,
	);
};

export default renderTestApp;
