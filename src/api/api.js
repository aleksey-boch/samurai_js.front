import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3dc40e5a-2498-4648-8754-bcdd62cbe9be',
    },
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },

    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`);
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
};