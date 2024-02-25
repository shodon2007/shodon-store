import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';

test('testing button tsx', () => {
    render(<Button>hello world</Button>);
    const buttonElem = screen.getByText('hello world');
    expect(buttonElem).toBeInTheDocument();
    expect(buttonElem).toMatchSnapshot();
});