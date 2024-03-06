import { render, screen } from "@testing-library/react"
import Catalog from "./Catalog"
import { ReactQuery } from "src/app/providers/tanstack-query"
import { useGetCatalog } from "src/shared/hooks/useGetCatalog"
import { CatalogItem, Product } from "src/shared/api/productApi";
import axios, { AxiosHeaders, AxiosResponse } from "axios";
import { UseQueryResult } from "@tanstack/react-query";

jest.mock('axios');

describe('Testing Catalog.test.tsx', () => {
    let resp: AxiosResponse<CatalogItem[], any> | {} = {
    }

    beforeEach(() => {
        resp = {
            config: {
                headers: new AxiosHeaders(),
            },
            data: [
                {
                    name_ru: 'Телефоны',
                    img: 'https://google.com',
                    id: 1,
                    name: 'phones',
                }
            ],
            status: 200,
            statusText: 'hello'
        }
    })

    test('first testging', async () => {
        (axios.get as jest.Mock).mockReturnValue(resp);
        render(<ReactQuery><Catalog /></ReactQuery>)
        const items = await screen.findAllByTestId('catalog-link');
        expect(items.length).toBe(1)
    })
})