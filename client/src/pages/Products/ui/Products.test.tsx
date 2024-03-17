import { screen } from '@testing-library/react';
import * as useGetDevicesModule from 'src/shared/lib/useGetDevices/useGetDevices';
import renderTestApp from 'src/app/tests/helpers/renderTestApp';

describe('testing Devices.tsx', () => {
	const devices: any = {
		data: [
			{
				name_ru: 'hello baby ',
				img: 'dsfdsfsfsf',
				id: 1,
				name: 'shodon store',
				price: 150000,
				brand_id: 1,
				rate: '5',
				reviews: 'dslkfjdsklfj',
				type_id: 15,
				attributes: [
					{
						id: 1,
						title: 'ОЗУ',
						description: '15gb',
					},
				],
			},
			{
				name_ru: 'hello baby ',
				img: 'dsfdsfsfsf',
				id: 2,
				name: 'superdfjklsdjf',
				price: 150000,
				brand_id: 1,
				rate: '5',
				reviews: 'dslkfjdsklfj',
				type_id: 15,
				attributes: [
					{
						id: 1,
						title: 'ОЗУ',
						description: '15gb',
					},
					{
						id: 2,
						title: 'память',
						description: '12gb',
					},
				],
			},
		],
		isLoading: false,
		isError: false,
		refetch: Function,
	};

	test('testing Device List', async () => {
		jest.spyOn(useGetDevicesModule, 'useGetDevices').mockReturnValue(devices);
		renderTestApp('/phones');
		const devicesPage = await screen.findByTestId('devices-page');
		const deviceItem = await screen.findAllByTestId('device-item');
		expect(devicesPage).toBeInTheDocument();
		expect(devicesPage).toMatchSnapshot();
		expect(deviceItem.length).toBe(2);
	});

	test('testing spinner', async () => {
		const mockDevices: any = {
			isFetching: true,
			refetch: (): any => null,
		};
		jest
			.spyOn(useGetDevicesModule, 'useGetDevices')
			.mockReturnValue(mockDevices);
		renderTestApp('/phones');

		expect(screen.getByTestId('spinner')).toBeInTheDocument();
	});
});
