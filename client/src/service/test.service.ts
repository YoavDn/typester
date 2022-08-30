import type { testType } from '@/types'
import axios from 'axios'

const API = process.env.NODE_ENV === 'production' ? '/api/test' : 'http://localhost:3000/api/test'

export const testService = {
    saveTest,
    getUserTests
}

async function saveTest(test: testType, uid: string) {
    return axios.post(`${API}/save`, { test, uid }).then(({ data }) => data)
}

async function getUserTests(uid: string) {
    return axios.get(`${API}/${uid}`).then(({ data }) => data)
}