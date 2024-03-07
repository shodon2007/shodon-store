import { screen } from '@testing-library/react'
import * as useGetDevicesModule from 'src/shared/lib/useGetDevices/useGetDevices'
import renderWithRouter from 'src/app/tests/renderWithRouter/renderWithRouter'

describe('testing Devices.tsx', () => {
  let devices: any = {
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
  }

  beforeAll(() => {
    devices = {}
  })

  test('testing Device List', async () => {
    jest.spyOn(useGetDevicesModule, 'useGetDevices').mockReturnValue(devices)
    renderWithRouter('/phones')
    const devicesPage = await screen.findByTestId('devices-page')
    const deviceItem = await screen.findAllByTestId('device-item')
    expect(devicesPage).toBeInTheDocument()
    expect(deviceItem.length).toBe(2)
  })
})
