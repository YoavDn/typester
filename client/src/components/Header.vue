
    
<script setup lang='ts'>
import AppLogo from '@/assets/imgs/typesterLogo.svg'
import Crown from '@/assets/imgs/crown.svg'
import User from '@/assets/imgs/user.svg'
import Settings from '@/assets/imgs/settings.svg'
import Keyboard from '@/assets/imgs/keyboard.svg'
import type { optionsType, testLevelType } from '@/types'


import { useTestOptionsStore } from '@/stores/testOptions'
import { computed } from 'vue'

const testOptionsStore = useTestOptionsStore()
const testMode = computed(() => testOptionsStore.getTestMode)
const testLevel = computed(() => testOptionsStore.getTestLevel)

function hendleChangeOption(newOption: optionsType) {
    if (typeof newOption === 'string') {
        testOptionsStore.setTestMode(newOption)
    } else {
        testOptionsStore.setTestLevel(newOption)
    }
}

</script>
    
<template>
    <header class="app-header">
        <div class="header-contianer flex">
            <nav class="logo-and-nav flex">
                <AppLogo class="logo" />
                <div class="nav flex">
                    <Keyboard class="nav-svg keyboard" />
                    <Crown class="nav-svg" />
                    <Settings class="nav-svg" />
                    <User class="nav-svg" />
                </div>

            </nav>
            <div class="test-options flex">
                <div class="time-or-number-option test-option flex">
                    <h2 class="txt-light" @click="hendleChangeOption('time')"
                        :class="{ 'active-option': testMode === 'time' }">time</h2>
                    <h2 class="txt-light" @click="hendleChangeOption('words')"
                        :class="{ 'active-option': testMode === 'words' }">words</h2>
                </div>
                <div class="numbers-options test-option flex">
                    <h2 v-for="i  in 4" :key="i" @click="hendleChangeOption(i * 15 as testLevelType)" class="txt-light"
                        :class="{ 'active-option': testLevel === i * 15 }">{{ i * 15 }}</h2>
                </div>
            </div>
        </div>
    </header>
</template>




<style lang="scss" scoped>
@import '@/assets/style/main.scss';


.active-option {
    color: $main-theme;
}

.app-header {
    display: grid;
    grid-template-columns: auto minmax(0, 1000px) auto;
    justify-content: center;



    .header-contianer {
        grid-column: 2;
        justify-content: space-between;
        align-items: center;
        width: 100%;


        .logo-and-nav {


            .logo {
                margin-inline-end: 2em;

            }

            .nav-svg {
                cursor: pointer;
                fill: $text-dull;
                height: 20px;
                width: 20px;
                margin: 16px;


                &.keyboard {
                    width: auto;
                    height: 36px;
                    margin: 10px;
                }

                &:hover {
                    fill: $text;
                }
            }
        }

        .test-options {
            cursor: pointer;
            color: $text-dull;
            flex-direction: column;

            h2 {
                font-size: 14px;
            }

            .test-option {
                h2:not(:first-child) {
                    margin-inline-start: 6px;

                }

                h2:not(.active-option):hover {
                    color: $text
                }
            }
        }
    }

    @media (max-width: 700px) {
        .app-header {
            display: fixed;
            left: 36px;
            right: 36px;

        }

        .header-contianer {


            .logo-and-nav {
                flex-direction: column;
                align-items: baseline;

                .nav-svg {
                    margin: 5px 10px;

                    &.keyboard {

                        margin: 0 5px;
                        height: 33px;
                        margin-inline-start: 0;
                    }
                }
            }
        }
    }
}
</style>