export interface IBaseResponseList {
    results: [];
    message?: string;
    statusCode: string | number;
    isSuccess: boolean;
}

export interface IBaseResponse {
    result: object | string;
    message?: string;
    statusCode: string | number;
    isSuccess: boolean;
}

export interface IBaseResponsePagination {
    results: [];
    message?: string;
    statusCode: string | number;
    isSuccess: boolean;
    totalRecord: number;
}