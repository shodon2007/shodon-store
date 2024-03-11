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
		});
	});
});
