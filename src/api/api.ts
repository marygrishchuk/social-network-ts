import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9737ce33-e446-4fc8-a0ee-6b402cc66ad3"
    }
})

export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
}

export const followAPI = {
    follow(userId: string) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, `status=${status}`)
            .then(response => response.data)
    },
}