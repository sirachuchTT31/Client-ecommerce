export interface ISession {
    accessToken: string;
    user_id: string;
    email: string;
    firstname?: string;
    lastname?: string
    telephone?: string;
    Role?: object | string;
    iat: number;
    exp: number;
}

export interface IGetSession {
    accessToken?: string;
    credential?: ICredential;
}

export interface ICredential {
    user_id: string;
    email: string;
    firstname?: string;
    lastname?: string
    telephone?: string;
    Role?: object | string;
    iat: number;
    exp: number;
}