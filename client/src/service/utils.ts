import { commonEnWords } from '../utils/commonWords'

const englishWords = commonEnWords.split('')

export function randomTxt(lang = 'english') {
    const txtBody = englishWords.sort(() => Math.random() - .5).slice(100)

    console.log(txtBody);
}

