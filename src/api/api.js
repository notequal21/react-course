import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ab507d36-bde7-4c2c-b0b5-e5bfca9ffecd",
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
    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile)
        return (
            instance.put('profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    },
}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`);
    }
}