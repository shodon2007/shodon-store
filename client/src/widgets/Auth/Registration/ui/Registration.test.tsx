import { screen } from '@testing-library/react';
import renderTestApp from 'src/app/tests/helpers/renderTestApp';
import '@testing-library/jest-dom/jest-globals';

describe('jest testing registration.test.tsx', () => {
	test('testing elements in document', () => {
		renderTestApp('/auth');

		const registrationPage = screen.getByTestId('registration-page');
		const registrationButton = screen.getByTestId('registration-button');
		const registrationInputs = screen.getAllByTestId('registration-input');

		expect(registrationPage).toBeInTheDocument();
		expect(registrationButton).toBeInTheDocument();
		expect(registrationInputs.length).toBe(2);
	});

	test('testing snapshopts', () => {
		renderTestApp('/auth');

		const registrationPage = screen.getByTestId('registration-page');

		expect(registrationPage).toMatchSnapshot();
	});
});
