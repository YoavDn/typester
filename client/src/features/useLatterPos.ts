import type { caretPosType } from '@/types'
import type MainAppVue from '@/views/MainApp.vue'
import type { HtmlAttributes } from 'csstype'
import { ref, onMounted, onUnmounted } from 'vue'

type functionResType = caretPosType | null
type htmlType = HTMLElement | null

export function useLatterPos(latter: HTMLElement, mainContainer: htmlType): functionResType {
    if (mainContainer !== null) {
        const latterPos = latter.getBoundingClientRect()
        const containerPos = mainContainer!.getBoundingClientRect()

        const relativePos: caretPosType = {
            top: latterPos.top - containerPos.top,
            bottom: latterPos.bottom - containerPos.bottom,
            right: latterPos.right - containerPos.right,
            left: latterPos.left - containerPos.left
        }
        return relativePos

    } else return null

}