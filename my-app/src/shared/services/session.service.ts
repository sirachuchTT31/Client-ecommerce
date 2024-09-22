import { IGetSession, ISession } from "../interface/auth/ISession";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

export const setCredentialService = (data: ISession) => {
    clearCredentialService();
    setCookie('access_token', data.accessToken);
    const profile = {
        user_id: data.user_id,
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
        telephone: data.telephone,
        Role: data.Role,
        iat: data.iat,
        exp: data.exp
    }
    setCookie('credential', profile);
}

export const clearCredentialService = () => {
    deleteCookie("access_token");
    deleteCookie("credential")
}

export const getCredentialService = (): IGetSession => {
    const credential = {
        accessToken: getCookie("access_token"),
        credential: getCookie("credential")
    }
    return credential;
}


