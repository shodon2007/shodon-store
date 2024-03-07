import {screen } from "@testing-library/react"
import * as useGetCatalogModule from "src/shared/lib/useGetCatalog/useGetCatalog";
import renderWithRouter from "src/app/tests/renderWithRouter/renderWithRouter";

describe('Testing Catalog.test.tsx', () => {
    let resp: any = {
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
            }
        ],
        isError: false,
    };

    test('Testing Catalog links', async () => {
        jest.spyOn(useGetCatalogModule, 'useGetCatalog').mockReturnValue(resp);
        renderWithRouter();
        const CatalogItems = await screen.findAllByTestId('catalog-link');
        const CatalogPage = await screen.findByTestId('catalog-page');

        expect(CatalogItems.length).toBe(2);
        expect(CatalogPage).toBeInTheDocument();
        expect(CatalogPage).toMatchSnapshot();
    });

    test('testing loading', async () => {
        const loadingResp: any = {isLoading: true};
        jest.spyOn(useGetCatalogModule, 'useGetCatalog').mockReturnValue(loadingResp);
        renderWithRouter();
        const loadingPage = await screen.findByTestId('loading-page');

        expect(loadingPage).toBeInTheDocument();
        expect(loadingPage).toMatchSnapshot();
    });
})