<script setup lang='ts'>
import { SunIcon } from '@heroicons/vue/24/outline';
import { MoonIcon } from '@heroicons/vue/24/outline'
import { computed, ref, onMounted, watchEffect } from 'vue';

const ElBody = ref<HTMLElement | null>(document.querySelector('body'))
const isDark = ref(true)



const isDarkTheme = computed(() => ElBody.value?.classList.contains('dark'))

watchEffect(() => {
    console.log(isDark.value);
    if (isDark.value) {
        document.querySelector('body')?.classList.remove('dark')
        document.querySelector('body')?.classList.add('light')
    } else {
        document.querySelector('body')?.classList.remove('light')
        document.querySelector('body')?.classList.add('dark')
    }
})


</script>


<template>
    <input v-model="isDark" type="checkbox" id="switch" :checked="isDark" />
    <label for="switch">
        <MoonIcon v-if="!isDark" class="moon-svg" />
        <SunIcon v-else class="sun-svg" />
    </label>
</template>


<style lang='scss' scoped >
@import '@/assets/style/main.scss';




input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
}

label {
    cursor: pointer;
    text-indent: -9999px;
    width: 45px;
    height: 25px;
    background-color: rgba(145, 145, 139, 0.3);
    border: solid 1px rgba(white, .6);
    display: block;
    border-radius: 100rem;
    position: relative;

    .sun-svg {
        position: absolute;
        top: 5px;
        left: 24px;
        width: 13px;
        height: 13px;
        color: rgba(black, .5);


        z-index: 149;
    }

    .moon-svg {
        position: absolute;
        top: 6px;
        left: 5px;
        width: 13px;
        height: 13px;
        color: white;
        z-index: 49;
    }
}

label:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    background: black;
    border-radius: 11px;

    transition: 0.3s;
}

input:checked+label {
    border: solid .5px rgba(black, .3);
    background-color: rgba(black, 0.1);
    // background: var(--text);
}

input:checked+label:after {
    left: calc(100% - 5px);


    background: white;
    transform: translateX(-100%);
}

label:active:after {
    width: 20px;

}
</style>