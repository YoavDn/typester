<script setup lang='ts'>
import { useTestOptionsStore } from '@/stores/TestSettings';
import type { ITestSettings, langType } from '@/types';
import { computed, watchEffect } from 'vue'
const testOptionsStore = useTestOptionsStore()

const langs = ['English', 'French', 'German', 'Hebrew', 'Russian', 'Spanish']
const testSettings = computed(() => testOptionsStore.getTestSettings)
type dictType = { [key: string]: string | boolean }

function isActiveLang(lang: string) {
    return { 'setting-btn-active': lang.toLowerCase() === testSettings.value.lang }
}


function saveTestSettings(option: "lang" | 'smoothCaret' | 'difficulty', newSetting: string | boolean) {
    console.log('hii');
    const newSettings: dictType = { ...testSettings.value }

    newSettings[option] = newSetting
    testOptionsStore.setNewSettings(newSettings as ITestSettings)
}
</script>


<template>
    <section class="test-settings">
        <div class="test-lang setting-option">
            <h2>Language</h2>
            <p>Change the Test language</p>
            <div class="language-container">
                <button v-for="lang in langs" :class="isActiveLang(lang)"
                    @click="saveTestSettings('lang', lang.toLowerCase())">{{
                            lang
                    }}</button>
            </div>
        </div>
        <div class="test-diff setting-option">
            <h2>Difficulty</h2>
            <p>Normal is the classic type test experience. Expert fails the test if you submit (press space) an
                incorrect word. Master fails if you press a single incorrect key (meaning you have to achieve 100%
                accuracy).</p>
            <div class="options flex ">
                <button @click="saveTestSettings('difficulty', 'noraml')"
                    :class="{ 'setting-btn-active': testSettings.difficulty === 'normal' }">Normal</button>
                <button @click="saveTestSettings('difficulty', 'hard')"
                    :class="{ 'setting-btn-active': testSettings.difficulty === 'hard' }">Hard</button>
                <button @click="saveTestSettings('difficulty', 'expert')"
                    :class="{ 'setting-btn-active': testSettings.difficulty === 'expert' }">Expert</button>
            </div>
        </div>
        <div class="smooth-caret setting-option">
            <h2>Smooth Caret</h2>
            <p>The caret will move smoothly between letters and words.</p>
            <div class="options flex">
                <button @click="saveTestSettings('smoothCaret', false)"
                    :class="{ 'setting-btn-active': !testSettings.smoothCaret }">Off</button>
                <button @click="saveTestSettings('smoothCaret', true)"
                    :class="{ 'setting-btn-active': testSettings.smoothCaret }">On</button>
            </div>
        </div>
    </section>
</template>


<style lang='scss' scoped >
@import '@/assets/style/main.scss';

.setting-option {
    margin-bottom: 6rem;
}

.test-lang {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        font-size: 2rem;
        color: var(--text);
    }

    p {
        color: var(--text-dull);
        font-size: 1.5rem;
    }

    .language-container {
        display: grid;
        gap: .5rem;
        grid-template-columns: 1fr 1fr 1fr;

        button {
            @include settings-btn
        }
    }
}

.test-diff {
    @include settign-option-grid;

    h2 {
        grid-area: title;
        font-size: 2rem;
        color: var(--text);
        align-self: flex-end;
    }

    p {
        padding-inline-end: 4rem;
        grid-area: txt;
        color: var(--text-dull);
        font-size: 1.5rem;
    }

    .options {
        grid-area: options;
        width: 100%;

        button {
            @include settings-btn
        }

    }
}

.smooth-caret {
    @include settign-option-grid;

    h2 {
        grid-area: title;
        font-size: 2rem;
        color: var(--text);
        align-self: flex-end;
    }

    p {
        grid-area: txt;
        color: var(--text-dull);
        font-size: 1.5rem;
    }

    .options {
        grid-area: options;

        button {
            @include settings-btn
        }

    }
}
</style>