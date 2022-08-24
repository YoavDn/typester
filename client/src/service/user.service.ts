import axios from 'axios'

const API = 'http://localhost:3000/api/user'

export const userService = {
    logout,
    login,
    loginWithGoogle,
    getLoggedInUser
}

export async function logout() {

}


export async function login(user: { email: string, password: string }): Promise<any> {
    return axios.post(`${API}/login`, user).then(({ data }) => data)
}

export async function loginWithGoogle() {

}


export async function getLoggedInUser() {

}