import { serverUrl } from "../config/server/server";

class ApiGeneral {
    public url: string;
    constructor() {
        this.url = serverUrl;
    }
}

export default ApiGeneral;