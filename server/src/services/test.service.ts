
import type { ITest, testType } from '../models/test.model'
import { User } from '../models/user.model'
import { Test } from '../models/test.model'


export const testService = {
    saveTest,
    userTests,
    getTopTests
}

export async function saveTest(test: testType, userID: string) {
    const testToSave = new Test({ ...test, uid: userID })
    await testToSave.save()
    return testToSave
}

async function userTests(userID: string) {
    try {
        const userTests = await Test.find({ uid: userID })
        if (!userTests) return null
        return userTests
    } catch (err) {
        return console.log(err);
    }
}

async function getTopTests() {
    try {
        const topTests = await Test.find().sort({ 'wpm': -1 })
        const topTestsMap = topTests.map(async (test) => {
            return {
                // @ts-ignore
                user: await User.findById(test.uid),
                wpm: test.wpm,
                acc: test.acc,
                timestamp: test.timestamp
            }
        })
        // const topTests = await Test.find()
        return Promise.all(topTestsMap)

    } catch (err) {
        return console.log(err);
    }
}

