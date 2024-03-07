import { render, screen } from "@testing-library/react"
import Catalog from "./Catalog"
import { ReactQuery } from "src/app/providers/tanstack-query";
import * as useGetCatalogModule from "src/shared/lib/useGetCatalog/useGetCatalog";
import { MemoryRouter } from "react-router-dom";

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
        render(<MemoryRouter initialEntries={['/']}><ReactQuery><Catalog /></ReactQuery></MemoryRouter>)
        const CatalogItems = await screen.findAllByTestId('catalog-link');
        const CatalogPage = await screen.findByTestId('catalog-page');

        expect(CatalogItems.length).toBe(2);
        expect(CatalogPage).toBeInTheDocument();
        expect(CatalogPage).toMatchSnapshot();
    });

    test('testing loading', async () => {
        const loadingResp: any = {isLoading: true};
        jest.spyOn(useGetCatalogModule, 'useGetCatalog').mockReturnValue(loadingResp);
        render(<MemoryRouter initialEntries={['/']}><ReactQuery><Catalog /></ReactQuery></MemoryRouter>);
        const loadingPage = await screen.findByTestId('loading-page');

        expect(loadingPage).toBeInTheDocument();
        expect(loadingPage).toMatchSnapshot();
    });
})