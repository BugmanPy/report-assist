import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { onRequest, onRequestError } from './requestInterceptor';
import { onResponse, onResponseError } from './responseInterceptor';

class ApiService {
    private API?: AxiosInstance;

    initializeAPI = async () => {
        this.API = axios.create({
            baseURL: 'baseUrl',
            timeout: 120000
        });

        this.API.interceptors.request.use(onRequest as unknown as (
            (value: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>),
            onRequestError);
        this.API.interceptors.response.use(onResponse as unknown as (
            value: AxiosResponse<any, any>) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>,
            onResponseError);
    }

    getData = (url: string, config?: AxiosRequestConfig) => {
        return this.API?.get(url, config);
    };

    postData = (url: string, payload: object, config?: AxiosRequestConfig) => {
        return this.API?.post(url, payload, config);
    };

    updateData = (url: string, payload: object, config?: AxiosRequestConfig) => {
        return this.API?.put(url, payload, config);
    };

    patchData = (url: string, payload: object, config?: AxiosRequestConfig) => {
        return this.API?.patch(url, payload, config);
    };

    deleteData = (url: string, config?: AxiosRequestConfig) => {
        return this.API?.delete(url, config);
    };
}

export default new ApiService();

/**
 * USAGE
 * ApiService.getData(url, { data: data })?.then((response:any) => {
        callback(localSettings.data)
    }).catch((error: any) => {
       console.log("error")
    })
 */