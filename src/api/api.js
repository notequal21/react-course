import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        // "API-KEY": "6a9c5a3c-1374-411d-897a-412f8482ea21",
        "API-KEY": "e96ab015-d9f4-418d-87e3-58378319047f",
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
        return instance.get(`/profile/${userId}`);
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}