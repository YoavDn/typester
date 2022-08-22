import { defineStore } from 'pinia'

import type { caretPosType } from '@/types'
import { useLatterPos } from '@/features/useLatterPos'
import { useTestOptionsStore } from './testOptions'
import { useTestStore } from './test'
type initalCaretpos = caretPosType | null

export const useCaretStore = defineStore({
    id: 'caret',
    state: () => ({
        caretPos: null as initalCaretpos,
        isLatterEnd: false,
        currLineIdx: 1,
        relativeTop: 0,
        caretCurrWordIdx: 0,


    }),
    getters: {
        getCaretPos: ({ caretPos }) => caretPos,
        getIslatterEnd: ({ isLatterEnd }) => isLatterEnd,
        getRelativeTop: ({ relativeTop }) => relativeTop,
        getCurrLineIdx: ({ currLineIdx }) => currLineIdx
    },
    actions: {


        async updatedCaretPos(htmlChild: HTMLElement, htmlParant: HTMLElement) {
            const testStore = useTestStore()

            if (this.caretPos === null) {
                this.caretPos = await useLatterPos(htmlChild, htmlParant) as caretPosType
                return
            }

            const { top, left, leftEnd, bottom } = await useLatterPos(htmlChild, htmlParant) as caretPosType
            if (top === this.caretPos.top) {
                this.caretPos.left = left
                this.caretPos.leftEnd = leftEnd
            } else {
                this.currLineIdx++
                if (this.currLineIdx >= 3) {
                    testStore.cutWordsToRender()
                    this.caretCurrWordIdx = 0
                }
                this.caretPos.top = top
                // this.caretPos.top = top + this.relativeTop
                this.caretPos.left = left
                this.caretPos.leftEnd = leftEnd
                this.caretPos.bottom = bottom

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
