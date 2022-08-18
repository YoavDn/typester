import type { caretPosType } from '@/types'
import { reactive } from 'vue'



type htmlType = HTMLElement | null

export function useLatterPos(latter: HTMLElement, mainContainer: htmlType): caretPosType | null {
    if (mainContainer === null) return null
    const latterPos = latter.getBoundingClientRect()
    const containerPos = mainContainer.getBoundingClientRect()


    const relativePos: caretPosType = reactive({
        top: latterPos.top - containerPos.top,
        bottom: latterPos.bottom - containerPos.bottom,
        right: latterPos.right - containerPos.right,
        left: latterPos.left - containerPos.left,
        leftEnd: latterPos.left - containerPos.left + latterPos.width
    })
    return relativePos

}