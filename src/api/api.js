import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0ee5016e-787d-40e8-936c-ec4a575d8937",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 6) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
        )
    },
    follow(userID) {
        return (
            instance.post(`follow/${userID}`)
        )
    },
    unFollow(userID) {
        return (
            instance.delete(`follow/${userID}`)
        )
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status});
    },
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}