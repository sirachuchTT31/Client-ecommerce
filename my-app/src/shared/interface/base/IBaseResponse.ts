export interface IBaseResponseList<T> {
    results: string[] | T;
    message?: string;
    statusCode: string | number;
    isSuccess: boolean;
}

export interface IBaseResponse<T> {
    result: object | T;
    message?: string;
    statusCode: string | number;
    isSuccess: boolean;
}
