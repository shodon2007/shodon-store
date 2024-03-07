import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ReactQuery } from 'src/app/providers/tanstack-query';
import * as useGetDevicesModule from 'src/shared/lib/useGetDevices/useGetDevices'
import Devices from './Devices';

describe('testing Devices.tsx', () => {
    let devices: any = {};

    beforeAll(() => {
        devices = {
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
                        }
                    ]
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
                    ]
                }
            ],
            isLoading: false,
            isError: false,
            refetch: () => 'hello'
        }
    })

    test('testing Device List', async () => {
        jest.spyOn(useGetDevicesModule, 'useGetDevices').mockReturnValue(devices);
        render(<MemoryRouter initialEntries={['/phones']}><ReactQuery><Devices /></ReactQuery></MemoryRouter>);
        const devicesPage = await screen.findByTestId('devices-page');
        const deviceItem = await screen.findAllByTestId('device-item');
        expect(devicesPage).toBeInTheDocument();
        expect(deviceItem.length).toBe(2);
    })
})