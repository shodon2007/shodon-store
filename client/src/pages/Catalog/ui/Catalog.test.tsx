import { fireEvent, screen } from '@testing-library/react';
import * as useGetCatalogModule from 'src/shared/lib/useGetCatalog/useGetCatalog';
import * as useGetDevicesModule from 'src/shared/lib/useGetDevices/useGetDevices';
import renderTestApp from 'src/app/tests/helpers/renderTestApp';

describe('Testing Catalog.test.tsx', () => {
	const resp: any = {
		isLoading: false,
		data: [
			{
				id: 1,
				name: 'hello',
				name_ru: 'прив',
				img: 'hedfsdkf',
			},
			{
				id: 2,
				name: 'Телефончики',
				name_ru: 'Phones',
				img: 'https://hedfsdkf.png',
			},
		],
		isError: false,
	};

	test('Testing Catalog links', async () => {
		jest.spyOn(useGetCatalogModule, 'useGetCatalog').mockReturnValue(resp);
		renderTestApp();
		const CatalogItems = await screen.findAllByTestId('catalog-link');
		const CatalogPage = await screen.findByTestId('catalog-page');

		expect(CatalogItems.length).toBe(2);
		expect(CatalogPage).toBeInTheDocument();
		expect(CatalogPage).toMatchSnapshot();
	});

	test('testing loading', async () => {
		const loadingResp: any = { isLoading: true };
		jest
			.spyOn(useGetCatalogModule, 'useGetCatalog')
			.mockReturnValue(loadingResp);
		renderTestApp();
		const loadingPage = await screen.findByTestId('loading-page');

		expect(loadingPage).toBeInTheDocument();
		expect(loadingPage).toMatchSnapshot();
	});

	test('testing catalog links onClick', () => {
		const devicesResp: any = {
			data: [],
			isError: false,
			refetch: () => {},
		};
		jest.spyOn(useGetCatalogModule, 'useGetCatalog').mockReturnValue(resp);
		jest
			.spyOn(useGetDevicesModule, 'useGetDevices')
			.mockReturnValue(devicesResp);
		renderTestApp('/');
		const devicesLinks = screen.getAllByTestId('catalog-link');

		fireEvent.click(devicesLinks[0]);

		expect(screen.getByTestId('devices-page')).toBeInTheDocument();
	});
});
