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
        currLinePos: 6,
        currLineIdx: 1,
        relativeTop: 0
    }),
    getters: {
        getCaretPos: ({ caretPos }) => caretPos,
        getIslatterEnd: ({ isLatterEnd }) => isLatterEnd,
        getCurrLinePos: ({ currLinePos }) => currLinePos,
        getCurrLineIdx: ({ currLineIdx }) => currLineIdx
    },
    actions: {
        updatedCaretPos(htmlChild: HTMLElement, htmlParant: HTMLElement) {
            if (useLatterPos(htmlChild, htmlChild) === null) return
            const testOptionsStore = useTestOptionsStore()

            if (this.caretPos === null) {
                this.caretPos = useLatterPos(htmlChild, htmlParant) as caretPosType
            }

            const { top, left, leftEnd, } = useLatterPos(htmlChild, htmlParant,) as caretPosType
            if (top === this.caretPos.top) {
                this.caretPos.left = left
                this.caretPos.leftEnd = leftEnd
            } else {
                this.caretPos.top = testOptionsStore.getIsOnMinWords ? top : top + this.relativeTop
                this.caretPos.left = left
                this.caretPos.leftEnd = leftEnd

                this.currLineIdx++
                this.relativeTop += top
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
