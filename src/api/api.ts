import axios from "axios";

export const instance = axios.create({
    // baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    withCredentials: true,
    headers: {
        'API-KEY': '3dc40e5a-2498-4648-8754-bcdd62cbe9be',
    },
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodesForCapcthaEnum {
    CaptchaIsRequired = 10,
}

export type GetItemType<T> = {
    items: Array<T>
    totalCount: number
    error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}