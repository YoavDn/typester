import type { caretPosType } from '@/types'
import type MainAppVue from '@/views/MainApp.vue'
import type { HtmlAttributes } from 'csstype'
import { ref, reactive } from 'vue'

type htmlType = HTMLElement | null

export function useLatterPos(latter: HTMLElement, mainContainer: htmlType) {
    if (mainContainer !== null) {
        const latterPos = latter.getBoundingClientRect()
        const containerPos = mainContainer.getBoundingClientRect()
        console.log(latterPos);

        const relativePos: caretPosType = reactive({
            top: latterPos.top - containerPos.top,
            bottom: latterPos.bottom - containerPos.bottom,
            right: latterPos.right - containerPos.right,
            left: latterPos.left - containerPos.left,
            leftEnd: latterPos.left - containerPos.left + latterPos.width
        })
        return relativePos

    } else return null

}