import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import renderTestApp from 'src/app/tests/helpers/renderTestApp';

describe('testing Navbar.tsx', () => {
	describe('testing links', () => {
		test('testing "shodon-store" link', async () => {
			renderTestApp('/phones');
			const titleLink = await screen.findByTestId('title-link');
			fireEvent.click(titleLink);

			const catalogPage = await screen.findByTestId('catalog-page');

			expect(catalogPage).toBeInTheDocument();
		});
		test('testing "auth" link', async () => {
			renderTestApp('/phones');
			const authLink = await screen.findByTestId('auth-link');
			fireEvent.click(authLink);

			const authPage = await screen.findByTestId('auth-page');

			expect(authPage).toBeInTheDocument();
			expect(authPage).toMatchSnapshot();
		});
	});

	test('testing toggleButton click', async () => {
		renderTestApp('/auth');
		const themeButton = await screen.findByTestId('theme-button');

		expect(await screen.findByTestId('app')).toHaveClass('normal');

		fireEvent.click(themeButton);

		expect(await screen.findByTestId('app')).toHaveClass('dark');

		fireEvent.click(themeButton);

		expect(await screen.findByTestId('app')).toHaveClass('normal');
	});
});
