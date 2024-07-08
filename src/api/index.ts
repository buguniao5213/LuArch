import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

const BASE_URL = '/'


export class Request {
    private instance: AxiosInstance;
    private baseConfig: AxiosRequestConfig = { baseURL: BASE_URL, timeout: 60000 };

    public constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(Object.assign(this.baseConfig, config));

        this.instance.interceptors.request.use(
            (config: any) => {
                // const token = 'tokentoken';
                return config;
            },
            (error: any) => {
                return Promise.reject(error);
            }
        )
        this.instance.interceptors.response.use(
            (res: any) => {
                if(res.data.code === 200) {
                    return res.data.data;
                }else {
                    // 错误code处理
                    return "发生错误";
                }
            },
            (error: any) => {
                return Promise.reject(error);
            }
        )
    }

    public request<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.instance.request(config);
    }

    public get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get(url, {params, ...config});
    }

    public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.post(url, data, config);
    }

    public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.put(url, data, config)
    }

    public delete<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.delete(url, {params, ...config});
    }

}


export const Axios = new Request({
    baseURL: BASE_URL,
});