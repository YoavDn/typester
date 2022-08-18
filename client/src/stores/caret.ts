import { defineStore } from 'pinia'

import type { caretPosType } from '@/types'
import { useLatterPos } from '@/features/useLatterPos'
import { useTestOptionsStore } from './testOptions'
type initalCaretpos = caretPosType | null

export const useCaretStore = defineStore({
    id: 'caret',
    state: () => ({
        caretPos: null as initalCaretpos,
        isLatterEnd: false,
        currLineIdx: 1,
        relativeTop: 0,
        allWordsShown: false

    }),
    getters: {
        getCaretPos: ({ caretPos }) => caretPos,
        getIslatterEnd: ({ isLatterEnd }) => isLatterEnd,
        getCurrLineIdx: ({ currLineIdx }) => currLineIdx
    },
    actions: {

        setisAllWordsShown(isAllShown: boolean) {
            this.allWordsShown = isAllShown
        },
        updatedCaretPos(htmlChild: HTMLElement, htmlParant: HTMLElement) {

            if (this.caretPos === null) {
                this.caretPos = useLatterPos(htmlChild, htmlParant) as caretPosType
                return
            }

            const { top, left, leftEnd, bottom } = useLatterPos(htmlChild, htmlParant) as caretPosType
            if (top === this.caretPos.top) {
                this.caretPos.left = left
                this.caretPos.leftEnd = leftEnd
            } else {
                this.caretPos.top = this.allWordsShown ? top : top + this.relativeTop
                this.caretPos.left = left
                this.caretPos.leftEnd = leftEnd
                this.caretPos.bottom = bottom


                this.relativeTop += top
                this.currLineIdx++
            }
        },

        setLatterEnd(isEnd: boolean) {
            this.isLatterEnd = isEnd
        },

        resetCaret() {
            this.relativeTop = 0
            this.caretPos = null
        }

    }
})
