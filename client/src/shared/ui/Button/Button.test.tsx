import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('testing Button.tsx', () => {
	test('testing children string', () => {
		render(<Button>hello world</Button>);
		const buttonElem = screen.getByText('hello world');
		expect(buttonElem).toBeInTheDocument();
		expect(buttonElem).toMatchSnapshot();
	});
	test('testing empty children', () => {
		render(<Button></Button>);
		const buttonElem = screen.getByRole('button');
		expect(buttonElem).toBeInTheDocument();
		expect(buttonElem).toMatchSnapshot();
	});
	test('testing classes', () => {
		render(<Button className='hahaha'></Button>);
		const btnEl = screen.getByRole('button');
		expect(btnEl).toHaveClass('Button hahaha');
	});
	test('testing children', () => {
		render(<Button>hello world baby</Button>);
		const btnEl = screen.getByRole('button');
		expect(btnEl).toContainHTML('hello world baby');
		expect(btnEl).toMatchSnapshot();
	});
	test('testing empty children', () => {
		render(<Button></Button>);
		const btnEl = screen.getByRole('button');
		expect(btnEl).toContainHTML('');
		expect(btnEl).toMatchSnapshot();
	});
});
