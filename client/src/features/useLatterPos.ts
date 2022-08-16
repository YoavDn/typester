import type { caretPosType } from '@/types'
import type MainAppVue from '@/views/MainApp.vue'
import { reactive } from 'vue'



type htmlType = HTMLElement | null

export function useLatterPos(latter: HTMLElement, mainContainer: htmlType): caretPosType | null {
    if (mainContainer === null) return null

    const latterPos = latter.getBoundingClientRect()
    const containerPos = mainContainer.getBoundingClientRect()
    console.log(containerPos, "contianerpos", latterPos, "latter pos ");

    const relativePos: caretPosType = reactive({
        top: latterPos.top - containerPos.top,
        bottom: latterPos.bottom - containerPos.bottom,
        right: latterPos.right - containerPos.right,
        left: latterPos.left - containerPos.left,
        leftEnd: latterPos.left - containerPos.left + latterPos.width
    })
    return relativePos

}