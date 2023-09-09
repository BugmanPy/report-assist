import { AxiosError, AxiosRequestConfig } from 'axios';

export function getCookie(name: string) {
    const token = localStorage.getItem(name);
    if (token) {
        return token
    }
    return null;
}

export const onRequest = (config: AxiosRequestConfig) => {
    const token = getCookie('tokenKey');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    config.headers = {
        'Content-type': 'application/json',
        ...config.headers,
        ...headers,
    };
    return config;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);