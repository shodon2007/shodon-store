import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from 'src/app/App';
import { store } from 'src/app/providers/redux';
import { ReactQuery } from 'src/app/providers/tanstack-query';
import ThemeProvider from 'src/app/theme/ThemeProvider';
import * as Modals from 'src/widgets/Modal';

jest.mock('src/widgets/Modal');

const renderTestApp = (
	initialEntrie: string = '/',
	component: ReactNode = <div></div>,
) => {
	(Modals.Modal as jest.Mock).mockReturnValue(<div></div>);
	return render(
		<MemoryRouter initialEntries={[initialEntrie]}>
			<ThemeProvider>
				<Provider store={store}>
					<ReactQuery>
						{component}
						<App />
					</ReactQuery>
				</Provider>
			</ThemeProvider>
		</MemoryRouter>,
	);
};

export default renderTestApp;
