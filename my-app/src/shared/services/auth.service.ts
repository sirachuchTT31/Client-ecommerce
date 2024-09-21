import { AxiosResponse } from 'axios';
import { ISignIn } from "../interface/auth/ISignIn";
import { IBaseResponse } from "../interface/base/IBaseResponse";
import { ConfigurationService } from "./configuration.service"

const _http = new ConfigurationService();

export const signInService = (payload: ISignIn): Promise<AxiosResponse<IBaseResponse>> => {
    return _http.getHttpConfiguration().post('/auth/sign-in', payload);
}