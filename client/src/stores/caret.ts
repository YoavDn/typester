import { defineStore } from 'pinia'

import type { caretPosType } from '@/types'
import { useLatterPos } from '@/features/useLatterPos'
type initalCaretpos = caretPosType | null

export const useCaretStore = defineStore({
    id: 'caret',
    state: () => ({
        caretPos: null as initalCaretpos,
        isLtr: true
    }),
    getters: {
        getCaretPos: ({ caretPos }) => caretPos,
        getIsltr: ({ isLtr }) => isLtr
    },
    actions: {
        updatedCaretPos(htmlChild: HTMLElement, htmlParant: HTMLElement) {
            this.caretPos = useLatterPos(htmlChild, htmlParant)
        },

        toggleLTR() {
            console.log('hello toogle caret');
            this.isLtr = !this.isLtr
        }
    }
})
