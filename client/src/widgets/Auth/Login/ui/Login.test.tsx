import { screen } from '@testing-library/react';
import renderTestApp from 'src/app/tests/helpers/renderTestApp';
import '@testing-library/jest-dom/jest-globals';

describe('jest testing Login.tet.tsx', () => {
	test('testing elements in document', () => {
		renderTestApp('/auth');

		const loginPage = screen.getByTestId('login-page');
		const loginButton = screen.getByTestId('login-button');
		const loginInputs = screen.getAllByTestId('login-input');

		expect(loginPage).toBeInTheDocument();
		expect(loginButton).toBeInTheDocument();
		expect(loginInputs.length).toBe(2);
	});

	test('testing snapshopts', () => {
		renderTestApp('/auth');

		const loginPage = screen.getByTestId('login-page');

		expect(loginPage).toMatchSnapshot();
	});
});
