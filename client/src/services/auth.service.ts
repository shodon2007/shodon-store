import axios from "axios";
import { URL } from "../global";

type TAuth = {
    status?: number,
    token?: string,
    message?: string,
}

class AuthService {
    async registration(username: string, password: string) {
        let res: TAuth = {};
        await axios.post(`http://${URL}/api/auth`, { username, password })
            .then(data => {
                res = {
                    status: data.status,
                    token: data.data.token,
                }
            })
            .catch((err) => {
                res = {
                    status: err.status,
                    message: err.response.data.message,
                }
            });

        return res;
    }

    async login(username: string, password: string) {
        let res: TAuth = {};

        await axios.get(`http://${URL}/api/auth`, { params: { username, password } })
            .then(data => {
                res = {
                    status: data.status,
                    token: data.data.token,
                }
            })
            .catch(data => {
                res = {
                    status: data.status,
                    message: data.response.data.message,
                }
            });


        return res;
    }
}

export default new AuthService();