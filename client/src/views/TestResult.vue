
<script setup lang='ts'>
import Chart from '@/components/Chart.vue';
import NextArrowSvg from '@/assets/imgs/left-arrow.svg'
import MainStats from '@/components/MainStats.vue'
import ReplaySvg from '@/assets/imgs/replay.svg'

import { useTestStore } from '@/stores/TestStore';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/UserStore';
import { computed, onMounted, ref } from 'vue';

const testResRef = ref<HTMLElement | null>(null)

const userStore = useUserStore()
const loggedInuUser = computed(() => userStore.getLoggedInUser)

window.scrollTo({
    top: 0,
    behavior: 'smooth',
})

const testStore = useTestStore()
// const test = computed(() => testStore.getTest)
const test = JSON.parse(localStorage.getItem('test') as string)
const router = useRouter()

function setNewTest() {
    testStore.newTest()
}

function reapetTest() {
    testStore.reloadTest()
    router.push('/test')
}

</script>


<template>
    <div>
        <section class="test-result">
            <div class="gradient-wapper">
                <div class="gradient1"></div>
                <div class="gradient2"></div>
                <div class="gradient3"></div>
            </div>
            <MainStats :test='test' />
            <div class="btns-bar flex">
                <button @click="reapetTest" class="btn-replay">
                    <ReplaySvg class="btn-svg" />
                    Reapet Test
                </button>
                <button @click="setNewTest" class="btn-next">Next Test
                    <NextArrowSvg class="btn-svg-next" />
                </button>
            </div>
            <a class="more-details-link" href="#test-details">For more Details &#8595</a>
        </section>

        <section id="test-details" class="details">
            <Chart class="chart" :test="test" />
            <router-link v-if="!loggedInuUser" class="sign-in-link" to="/profile"><span>Sign in</span> to save your
                result
            </router-link>
        </section>
    </div>

</template>


<style lang='scss'>
@import '@/assets/style/main.scss';

.sign-in-link {
    color: var(--text-dull);
    text-align: center;
    display: block;
    font-family: "Inter", sans-serif;
    text-decoration: none;
    font-size: 1.4rem;
    margin: auto;

    span {
        text-decoration: underline;
    }

    &:hover {
        span {

            color: var(--text)
        }
    }
}

.more-details-link {
    z-index: 2;
    margin-top: 1rem;
    margin-bottom: 4rem;
    font-family: "Inter", sans-serif;
    color: var(--text-dull);
    text-align: center;
    font-size: 1.3rem;
    text-decoration: none;

    &:hover {
        color: var(--text);
        text-decoration: underline;
    }
}

.details {
    margin-top: 3rem;
    z-index: 4;
}

.test-result {
    opacity: 1;
    position: relative;
    color: var(--text);
    display: flex;
    flex-direction: column;
    transition: all 3s;
}

.btns-bar {
    z-index: 2;
    justify-content: center;
    margin-bottom: 2rem;


    button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        padding: .8rem;
        font-size: 1.5rem;
        margin-inline: 1.5rem;
        border-radius: .8rem;
        background-color: transparent;
        border: none;
        transition: all .2s ease;
    }

    .btn-svg {
        fill: var(--text);
        width: 16px;
        margin-right: 10px;
    }

    .btn-next {
        background-color: var(--text);
        color: var(--bg);

        .btn-svg-next {
            fill: var(--bg);
        }

        &:hover {
            color: var(--text);
            background-color: transparent;
            outline: 1px solid var(--text);

            .btn-svg-next {
                fill: var(--text);
            }
        }
    }
}

.btn-replay {
    color: var(--text);

    &:hover {
        color: var(--text-dull);

        .btn-svg {
            fill: var(--text-dull);
        }
    }
}


@media (max-width: 670px) {
    .main-stats {
        max-width: 300px;

        .stats-middle {
            gap: .5rem;

            h2,
            h3 {
                font-size: 1.4rem;
            }
        }
    }

    .stat-box {
        h2 {
            font-size: 6rem;
            padding-bottom: 0;

        }

        h3 {
            font-size: 2rem;
        }
    }
}

@media (max-width: 470px) {
    .btns-bar {
        flex-direction: column-reverse;
        gap: 2rem;
        align-items: center;
        margin-top: 2rem;
    }
}
</style>