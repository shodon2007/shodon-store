import { render, screen } from '@testing-library/react';
import { useGetFilter } from 'src/shared/lib/useGetFilter/useGetFilter';
import Sidebar from './Sidebar';
import { MemoryRouter } from 'react-router-dom';
import { Modal } from 'src/widgets/Modal';

jest.mock('src/widgets/Modal');

jest.mock('src/shared/lib/useGetFilter/useGetFilter');

describe('testing sidebar', () => {
	test('testing attributes', () => {
		(Modal as jest.Mock).mockReturnValue(<div></div>);
		(useGetFilter as jest.Mock).mockReturnValue({
			data: {
				NFC: ['ЕСТЬ', 'НЕТ'],
				Камера: ['8mp', '12mp'],
				Озу: ['6gb', '8gb'],
			},
			isLoading: false,
		});
		render(
			<MemoryRouter initialEntries={['']}>
				<Sidebar />
			</MemoryRouter>,
		);

		const attributeButtons = screen.getAllByTestId('attribute-button');

		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		expect(screen.getByTestId('sidebar')).toMatchSnapshot();

		expect(attributeButtons.length).toBe(6);
	});
});
