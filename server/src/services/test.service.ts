import { testType } from "../../../client/src/types";
import { Test } from '../models/test.model'


export const testService = {
    saveTest,
    userTests
}

export async function saveTest(test: testType, userID: string) {
    // const queryTest = Test.findOne({ uid: userID })
    // if (queryTest) return
    console.log('hello from where i need to save');
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