
    
<script setup lang='ts'>
import AppLogo from '@/assets/imgs/typesterLogo.svg'
import AppLogoLight from '@/assets/imgs/logoLight.svg'

import { ArrowRightOnRectangleIcon } from '@heroicons/vue/24/solid'
import Crown from '@/assets/imgs/crown.svg'
import User from '@/assets/imgs/user.svg'
import Settings from '@/assets/imgs/settings.svg'
import Keyboard from '@/assets/imgs/keyboard.svg'

import type { optionsType, testLevelType, pagesType } from '@/types'

import { useRouter, useRoute } from 'vue-router'
import { useTestOptionsStore } from '@/stores/TestSettings'
import { useUserStore } from '@/stores/UserStore'
import { useThemeStore } from '@/stores/ThemeStore'

import { computed } from 'vue'
import router from '@/router'
import { useTestStore } from '@/stores/TestStore'

const testOptionsStore = useTestOptionsStore()
const userStore = useUserStore()
const themeStore = useThemeStore()

const testStore = useTestStore()
const appTheme = computed(() => themeStore.getAppTheme)
const user = computed(() => userStore.getLoggedInUser)
const route = useRoute()
const testMode = computed(() => testOptionsStore.getTestMode)
const testLevel = computed(() => testOptionsStore.getTestLevel)

function hendleChangeOption(newOption: optionsType) {
    if (typeof newOption === 'string') {
        testOptionsStore.setTestMode(newOption)
    } else {
        testOptionsStore.setTestLevel(newOption)
    }
}

function handleLogout() {
    userStore.logout()
    document.location.reload()
}



const isOnMobile = computed(() => window.innerWidth < 550)
const isShowLogout = computed(() => {
    return route.name === 'profile' && user.value
})

function goToPage(page: pagesType) {
    if (page === '/test') testStore.setNewTest()
    router.push(page)
}

const isOnHomeRoute = computed(() => {
    return { hidden: route.name === 'Home' }
})

const username = computed(() => {
    const firstLetter = user.value?.username[0].toUpperCase() as string
    return firstLetter + user.value?.username.split(' ').slice(0, 1).join().slice(1)
})

</script>
    
<template>
    <header :class="isOnHomeRoute" class="app-header">
        <div class="header-contianer flex">
            <nav class="logo-and-nav flex">
                <AppLogo v-if="appTheme === 'light'" @click="goToPage('/test')" class="logo" />
                <AppLogoLight v-else @click="goToPage('/test')" class="logo" />
                <div class="nav flex">
                    <Keyboard @click="goToPage('/test')" class="nav-svg keyboard" />
                    <Crown @click="goToPage('/leaderboard')" class="nav-svg" />
                    <Settings @click="goToPage('/settings')" class="nav-svg" />
                    <div @click="goToPage('/profile')" class="user-nav-link flex align-center">
                        <User class="nav-svg" />
                        <span class="username" v-if="user">{{ username }}</span>
                    </div>
                    <button @click="handleLogout" class="logout-btn flex" v-if="isShowLogout && isOnMobile">
                        Logout
                        <ArrowRightOnRectangleIcon class="logout-svg" />
                    </button>
                </div>

            </nav>
            <div v-if="(route.name === 'Test' || route.name === 'test result') && !isOnMobile"
                class="test-options flex">
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
            <button @click="handleLogout" class="logout-btn flex" v-if="isShowLogout && !isOnMobile">
                Logout
                <ArrowRightOnRectangleIcon class="logout-svg" />
            </button>
        </div>
    </header>
</template>




<style lang="scss" >
@import '@/assets/style/main.scss';

.hidden {
    display: none;
}


.logout-btn {
    cursor: pointer;
    background-color: transparent;
    border: none;
    align-items: center;
    gap: 4px;

    color: var(--text-dull);

    .logout-svg {
        display: inline;

        width: 20px;
    }

    &:hover {
        color: var(--text);
    }
}

.user-nav-link {
    cursor: pointer;

    .username {
        color: var(--text-dull);
        font-weight: 700;
        font-size: 1.3rem;
    }

    &:hover {
        .username {
            color: var(--text);
        }

        .nav-svg {
            fill: var(--text) !important
        }
    }
}

.active-option {
    color: var(--theme);
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
                color: var(--text);
                margin-inline-end: 2em;
            }

            .nav-svg {
                cursor: pointer;
                fill: var(--text-dull);
                height: 20px;
                width: 20px;
                margin: 16px;


                &.keyboard {
                    width: auto;
                    height: 36px;
                    margin: 10px;
                }

                &:hover {
                    fill: var(--text);
                }
            }
        }

        .test-options {
            cursor: pointer;
            color: var(--text-dull);
            flex-direction: column;

            h2 {
                font-size: 14px;
                font-family: 'Roboto Mono', monospace;
                font-weight: 300;
            }

            .test-option {
                h2:not(:first-child) {
                    margin-inline-start: 6px;

                }

                h2:not(.active-option):hover {
                    color: var(--text)
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
            display: flex;
            align-items: baseline;
            flex-direction: column;

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