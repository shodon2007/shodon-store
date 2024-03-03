import { render, screen } from "@testing-library/react"
import Catalog from "./Catalog"
import { ReactQuery } from "src/app/providers/tanstack-query"
import { useGetCatalog } from "src/shared/hooks/useGetCatalog"
import { CatalogItem } from "src/shared/api/productApi";
import { AxiosHeaders, AxiosResponse } from "axios";
import { UseQueryResult } from "@tanstack/react-query";

jest.mock('useGetCatalog');

describe('Testing Catalog.test.tsx', () => {
    // const resp:  UseQueryResult<CatalogItem[], Error> = {
    //     data: [
    //         {
    //             id: 1,
    //             img: 'helloworldingmp',
    //             name: 'fsdfsdfsf',
    //             name_ru: 'fdsfsdf'
    //         }
    //     ],
    //     dataUpdatedAt: 2313,
    //     error: {
    //         message: 'dfsdf',
    //         name: "dfsdf"
    //     },
    //     errorUpdateCount: 
    // }

    test('first testging', async () => {
        // (useGetCatalog as jest.Mock).mockReturnValue(resp);
        await render(<ReactQuery><Catalog /></ReactQuery>)
        screen.debug();
    })
})