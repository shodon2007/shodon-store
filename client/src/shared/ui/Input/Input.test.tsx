import { render, screen } from "@testing-library/react"
import Input from "./Input"

describe('testing Input.tsx', () => {
    test('testing input className', () => {
        render(<Input className='hello world' />);
        const input = screen.getByTestId('input');
        expect(input).toBeInTheDocument();
    })
})