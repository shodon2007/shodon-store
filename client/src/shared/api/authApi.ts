import { AxiosError, AxiosResponse } from "axios";
import ApiGeneral from "./generalApi";

interface Auth {
	username: string;
	message: string;
	token: string;
}

interface AuthError {
  message: string;
}

class AuthApi extends ApiGeneral {
	async login(username: string, password: string): Promise<AxiosResponse<Auth>|AxiosError<AuthError>> {
    try {
      return await this.api.get<Auth>(this.urls.auth, {
        params: { username, password },
      });
    } catch (error) {
      return error;
    }
	}
	async registration(username: string, password: string): Promise<AxiosResponse<Auth>|AxiosError<AuthError>> {
		try {
      return await this.api.post<Auth>(this.urls.auth, { username, password });
    } catch(e) {
      return e;
    }
	}
}

export default new AuthApi();
