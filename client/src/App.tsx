import { FC, useEffect } from "react";
import { getCatalog, postCatalog } from "./API/catalogAPI";

const App: FC = () => {
    useEffect(() => {
        async function getData() {
            const res2 = await postCatalog(
                {
                    img: "dfdf",
                    name: "Новые штучки",
                    name_ru: "dfdfdsf",
                },
                "thisistoken"
            );
            console.log(res2);
            const res = await getCatalog();
            console.log(res);
        }
        getData();
    }, []);
    return <div>jo</div>;
};

export default App;
