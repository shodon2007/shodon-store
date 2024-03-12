import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('testing title', () => {
	test('testing children', () => {
		render(<Title>hello world</Title>);

		const title = screen.getByText('hello world');

		expect(title).toBeInTheDocument();
		expect(title).toBeInTheDocument();
	});

	test('testing classes', () => {
		render(<Title className='green'>hello world</Title>);

		const title = screen.getByTestId('title');

		expect(title).toBeInTheDocument();
		expect(title).toHaveClass('Title green');
	});

	test('testign snapshot', () => {
		render(<Title>hello world</Title>);

		const title = screen.getByTestId('title');
		expect(title).toMatchSnapshot();
	});
});
