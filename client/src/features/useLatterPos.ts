import { ref, onMounted, onUnmounted } from 'vue'

export function useLatterPos(latter: HTMLElement) {
    const offsets = latter.getBoundingClientRect()

    return {
        top: offsets.top,
        left: offsets.left
    }
}