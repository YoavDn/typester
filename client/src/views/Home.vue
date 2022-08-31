<script setup lang='ts'>
//@ts-ignore

import { useThemeStore } from '@/stores/ThemeStore';
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const themeStore = useThemeStore()
const router = useRouter()

const appTheme = computed(() => themeStore.getAppTheme)

</script>


<template>
    <section class="home-page flex-column">
        <div class="gradient-wapper">
            <div class="gradient1"></div>
            <div class="gradient3"></div>
            <div class="gradient2"></div>
        </div>
        <div class="main-text">
            <ul>
                <li class="home-title" ref="typeEl">Type</li>
                <li class="home-title">Sleep.</li>
                <li class="home-title">Reapet.</li>
            </ul>
            <button @click="() => router.push('/test')" :class="{ 'btn-light': appTheme !== 'light' }"
                class="start-typing-btn">Start Typing</button>
        </div>
    </section>
</template>


<style lang='scss'>
@import '@/assets/style/main.scss';

.home-page {
    grid-row: 1 span/3;
    min-height: 100%;
    justify-items: center;
    justify-content: center;
    overflow: hidden;
    // background-color: red;

    .main-text {
        z-index: 1;

        margin: auto;

        .start-typing-btn {
            cursor: pointer;
            display: block;
            margin: auto;
            margin-block: 5rem;
            border: 2px solid transparent;
            border-radius: 6px;
            font-size: 1.8rem;
            padding: 1.6rem 5rem;
            background:
                linear-gradient(var(--bg), var(--bg)) padding-box,
                linear-gradient(to right, var(--theme), var(--sub-theme)) border-box;
            font-weight: 500;
            color: var(--text);
            box-shadow: var(--theme) 0px 0px 10px;
            transition: all 0.3s;

            &.btn-light {
                color: var(--bg);
                background:
                    linear-gradient(var(--text), var(--text)) padding-box,
                    linear-gradient(to right, var(--theme), var(--sub-theme)) border-box;
            }

            &:hover {
                box-shadow: var(--theme) 0px 0px 70px;

                font-weight: 700;
            }
        }

        ul {
            li {
                font-family: 'Inter', sans-serif;
            }
        }

        .home-title {
            text-align: center;
            font-size: 13rem;
            line-height: 16rem;
            font-weight: 900;
            color: var(--text);
        }
    }

}

@media (max-width: 620px) {
    .home-page {

        .main-text {

            .home-title {
                line-height: 12rem;
                font-size: 10rem;
            }
        }
    }
}

@media (max-width: 440px) {
    .home-page {

        .main-text {

            .home-title {
                line-height: 9rem;
                font-size: 7rem;
            }
        }
    }
}

.btn-grad {
    background-image: linear-gradient(to right, #314755 0%, #26a0da 51%, #314755 100%);
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
}

.btn-grad:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
</style>