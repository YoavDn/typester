import type { miniTestType } from '@/types'
import axios from 'axios'

const API = process.env.NODE_ENV === 'production' ? '/api/test' : 'http://localhost:3000/api/test'

export const testService = {
    saveTest,
    getUserTests,
    getTopTests
}

async function saveTest(test: miniTestType, uid: string) {
    return axios.post(`${API}/save`, { test, uid }).then(({ data }) => data)
}

async function getUserTests(uid: string) {
    return axios.get(`${API}/${uid}`).then(({ data }) => data)
}

async function getTopTests() {
    // try {
    //    await axios.get(`http://localhost:3000/api/test/top_tests`)
    //     console.log(data, 'from client');
    //     return data
    // } catch (err) {
    //     return console.log(err);
    // }
    return axios.get(`${API}/top_tests`).then(({ data }) => data)
}