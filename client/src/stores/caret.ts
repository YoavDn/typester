import { defineStore } from 'pinia'

import type { caretPosType } from '@/types'
import { useLatterPos } from '@/features/useLatterPos'
type initalCaretpos = caretPosType | null

export const useCaretStore = defineStore({
    id: 'caret',
    state: () => ({
        caretPos: null as initalCaretpos
    }),
    getters: {
        getCaretPos: ({ caretPos }) => caretPos
    },
    actions: {
        updatedCaretPos(htmlChild: HTMLElement, htmlParant: HTMLElement) {
            this.caretPos = useLatterPos(htmlChild, htmlParant)
        },
    }
})
