import {instance} from "./api";

type GetCaptchaUrlRepponseType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlRepponseType>(`security/get-captcha-url`).then(res => res.data);
    },
};