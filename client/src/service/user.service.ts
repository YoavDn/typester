import type { IUser } from '@/types'

import axios from 'axios'
axios.defaults.withCredentials = true

const API = 'http://localhost:3000/api/user'

export const userService = {
    logout,
    login,
    signup,
    loginWithGoogle,
    getLoggedInUser
}

export async function logout() {
    return axios.post(`${API}/logout`).then(({ data }) => data)
}

export async function login(user: { username: string, password: string }) {
    return axios.post(`${API}/signin`, user, { withCredentials: true }).then(({ data }) => data)
}

export async function signup(user: { username: string, password: string, email: string }) {
    return axios.post(`${API}/signup`, user, { withCredentials: true }).then(({ data }) => data)
}

export async function loginWithGoogle() {
    return axios.get(`${API}/google/login`, { withCredentials: true }).then(({ data }) => data)
}

export async function getLoggedInUser() {
    try {
        const { data } = await axios.get(`${API}/current_user`, { withCredentials: true })
        if (!data) return null
        return data
    } catch (err) {
        console.log('cant get current user', err);
    }
}