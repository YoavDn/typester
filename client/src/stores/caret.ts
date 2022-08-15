import { defineStore } from 'pinia'

import type { caretPosType } from '@/types'
import { useLatterPos } from '@/features/useLatterPos'
type initalCaretpos = caretPosType | null

export const useCaretStore = defineStore({
    id: 'caret',
    state: () => ({
        caretPos: null as initalCaretpos,
        isLatterEnd: false
    }),
    getters: {
        getCaretPos: ({ caretPos }) => caretPos,
        getIslatterEnd: ({ isLatterEnd }) => isLatterEnd
    },
    actions: {
        updatedCaretPos(htmlChild: HTMLElement, htmlParant: HTMLElement) {
            this.caretPos = useLatterPos(htmlChild, htmlParant)
        },

        setLatterEnd(isEnd: boolean) {
            console.log('hello toogle caret');
            this.isLatterEnd = isEnd
        }
    }
})
