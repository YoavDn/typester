<script setup lang='ts'>
import { computed } from 'vue';
import { UserIcon } from '@heroicons/vue/24/solid'
import { useThemeStore } from '@/stores/ThemeStore';
import type { IUser, IUserTest } from '@/types';

const themeStore = useThemeStore()
const props = defineProps<{ user: IUser, userTests: IUserTest[] | null }>()
const appTheme = computed(() => themeStore.getAppTheme)


const CapitalizeUsername = computed(() => {
    return props.user.username.split(' ')
        .map((word: string) => word[0].toUpperCase() + word.slice(1))
        .join(' ')
})

const averageWpm = computed(() => {
    if (!props.userTests || !Array.isArray(props.userTests)) return '--'
    if (props.userTests.length === 0) return 0

    const averageWpm = props.userTests!.reduce((sum: number, test: IUserTest) => {
        sum += test.wpm
        return sum
    }, 0)

    return Math.round(averageWpm / props.userTests.length)
})

const timeTyping = computed(() => {
    if (!props.userTests || !Array.isArray(props.userTests)) return '--'
    const sumTestsSeconds = props.userTests!.reduce((sumSeconds, test) => {
        sumSeconds += test.time
        return sumSeconds
    }, 0)
    return new Date(sumTestsSeconds * 1000).toISOString().slice(11, 19);
})


</script>


<template>
    <section class="user-info">
        <header class="user-profile-header flex-column">

            <UserIcon class="user-avatar w-3 h-4  text-white-500"
                :class="{ 'user-dark': appTheme === 'light', 'user-light': appTheme === 'dark' }"
                v-if="!props.user.imgUrl" />
            <img v-else class="user-imgurl" :src="props.user.imgUrl" alt="user image url">
            <h2 class="user-username">{{ CapitalizeUsername }}</h2>
            <h3 class="user-email">{{ props.user.email }}</h3>
        </header>
        <main class="user-profile-main flex">
            <div class="user-info-stat average-wpm flex-column">
                <h2 class="user-stat-title"> Average wpm</h2>
                <h1>{{ averageWpm }}</h1>
            </div>
            <div class="user-info-stat   flex-column">
                <h2 class=" user-stat-title  ">Time typing</h2>
                <h1 class="  time-typing">{{ timeTyping }}</h1>
            </div>
            <div class="user-info-stat tests-completed flex-column">
                <h2 class="user-stat-title">Tests completed</h2>
                <h1>{{ props.userTests === null || !Array.isArray(props.userTests) ? '--' : props.userTests.length }}
                </h1>
            </div>
        </main>
    </section>
</template>


<style lang='scss'>
.user-info {
    min-height: 400px;


    .user-profile-header {
        align-items: center;
        margin-bottom: 6rem;

        .user-imgurl {
            border-radius: 50%;
            margin-bottom: 1rem;
            border-width: 2px;
            width: 100px;
            height: 100px;
            border: 2px solid transparent;
            background:
                linear-gradient(var(--bg), var(--bg)) padding-box,
                linear-gradient(to right, var(--theme), var(--sub-theme)) border-box;
            box-shadow: var(--theme) 0px 0px 70px;
        }

        .user-avatar {
            font-size: 16px;
            border-radius: 50em;
            border: 2px solid transparent;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            padding: 2rem;
            margin-bottom: 1rem;
            color: var(--bg);
            box-shadow: var(--theme) 0px 0px 70px;
            -webkit-text-fill-color: transparent;

            &.user-dark {
                background:
                    linear-gradient(var(--bg), var(--bg)) padding-box,
                    linear-gradient(to right, var(--theme), var(--sub-theme)) border-box;
                color: var(--text);
            }

            &.user-light {
                background:
                    linear-gradient(var(--text), var(--text)) padding-box,
                    linear-gradient(to right, var(--theme), var(--sub-theme)) border-box;
                color: var(--bg);
            }
        }

        .user-username {
            font-size: 3rem;
            margin-bottom: .7rem;
            color: var(--text)
        }

        .user-email {
            font-size: 1.6rem;
            font-weight: 300;
            color: var(--text-dull)
        }

    }

    .user-profile-main {

        width: 80%;
        margin: auto;
        align-items: center;
        justify-content: space-between;



        .user-info-stat {
            flex-basis: 33%;
            color: var(--text);
            align-items: center;

            h1 {

                font-size: 3rem;
                font-weight: 300;
                line-height: 7.5rem;


                &.time-typing {
                    // font-weight: 300;
                    font-size: 2.4rem;
                }
            }

            h2 {
                font-size: 2rem;
                font-weight: 900;
            }
        }

        @media (max-width: 550px) {
            width: 100%;

            .user-info-stat {

                h1 {
                    line-height: 4rem;
                    font-size: 2rem !important;
                }

                h2 {
                    font-size: 1rem;
                }
            }
        }

        @media (max-width: 550px) {
            width: 100%;

            flex-direction: column;

            .user-info-stat {
                margin-top: 2rem;
            }
        }
    }

}

@media (max-width: 700px) {
    .user-info {
        .user-profile-header {
            margin-bottom: 3rem;
        }

        .user-profile-main {
            .user-info-stat {
                h1 {
                    font-size: 3rem;
                }

                h2 {
                    font-size: 1.4rem;
                }
            }
        }
    }
}
</style>