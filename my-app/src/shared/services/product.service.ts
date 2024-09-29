import { AxiosResponse } from 'axios';
import {IBaseResponsePagination } from "../interface/base/IBaseResponse";
import { ConfigurationService } from "./configuration.service"
import { IProductParams } from '../interface/product/IProduct';

const _http = new ConfigurationService();

export const findAllProductsService = (payload: IProductParams): Promise<AxiosResponse<IBaseResponsePagination>> => {
    return _http.getHttpConfiguration().get(`/products/pagination?page=${payload.page}&perPage=${payload.perPage}`);
}