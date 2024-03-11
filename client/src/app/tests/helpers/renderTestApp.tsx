import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from 'src/app/App';
import { store } from 'src/app/providers/redux';
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
					<App />
				</ReactQuery>
			</Provider>
		</MemoryRouter>,
	);
};

export default renderTestApp;
