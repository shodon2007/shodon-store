import { screen } from '@testing-library/react';
import renderTestApp from 'src/app/tests/helpers/renderTestApp';
import '@testing-library/jest-dom/jest-globals';

describe('testing Auth.tsx', () => {
	test('Test Auth page in document', () => {
		renderTestApp('/auth');

		const authPage = screen.getByTestId('auth-page');
		expect(authPage).toBeInTheDocument();
	});
});
