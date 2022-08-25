<script setup lang='ts'>
import { computed } from 'vue';
import { UserIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import type { HtmlAttributes } from 'csstype';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore()


//TODO: make proper type for user
const props = defineProps<{ user: any }>()


const appTheme = computed(() => themeStore.getAppTheme)

const CapitalizeUsername = computed(() => {
    return props.user.username.split(' ')
        .map((word: string) => word[0].toUpperCase() + word.slice(1))
        .join(' ')
})

</script>


<template>
    <section class="user-info">
        <header class="user-profile-header flex-column">

            <UserIcon class="user-avatar w-3 h-4  text-white-500"
                :class="{ 'user-dark': appTheme === 'light', 'user-light': appTheme === 'dark' }" />
            <h2 class="user-username">{{ CapitalizeUsername }}</h2>
            <h3 class="user-email">{{ props.user.email }}</h3>
        </header>
        <main class="user-profile-main flex">
            <div class="user-info-stat average-wpm flex-column">
                <h2 class="user-stat-title"> Average wpm</h2>
                <h1>34</h1>
            </div>
            <div class="user-info-stat   flex-column">
                <h2 class=" user-stat-title  ">Time typing</h2>
                <h1 class="  time-typing">3h 39m 3s</h1>
            </div>
            <div class="user-info-stat tests-completed flex-column">
                <h2 class="user-stat-title">Tests completed</h2>
                <h1> 49</h1>
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
    }

}

@media (max-width: 700px) {
    .user-info {

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