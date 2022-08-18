
<script setup lang='ts'>
import Chart from '@/components/Chart.vue';
import NextArrowSvg from '@/assets/imgs/left-arrow.svg'
import MainStats from '@/components/MainStats.vue'
import ReplaySvg from '@/assets/imgs/replay.svg'

import { useTestStore } from '@/stores/test';
import { useRouter } from 'vue-router';

import { computed } from 'vue';

const testStore = useTestStore()
const test = computed(() => testStore.getTest)
const router = useRouter()

function setNewTest() {
    testStore.setReload()
    router.push('/')
}

</script>


<template>
    <section class="test-result">
        <div class="gradient-wapper">
            <div class="gradient1"></div>
            <div class="gradient2"></div>
            <div class="gradient3"></div>
        </div>
        <MainStats />
        <div class="btns-bar flex">
            <button class="btn-replay">
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
        <h2>hi</h2>
        <Chart class="chart" />
    </section>

</template>


<style lang='scss'>
@import '@/assets/style/main.scss';

.more-details-link {
    margin-top: 1rem;
    margin-bottom: 4rem;
    font-family: "inter", sans-serif;
    color: $text-dull;
    text-align: center;
    font-size: 1.3rem;
    text-decoration: none;

    &:hover {
        color: $text;
        text-decoration: underline;
    }
}

.details {
    margin-top: 3rem;
    z-index: 4;
}



.test-result {
    position: relative;
    color: $text;
    display: flex;
    flex-direction: column;
}

.btns-bar {
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
    }

    .btn-svg {
        fill: white;
        width: 16px;
        margin-right: 10px;
    }

    .btn-next {
        background-color: white;

        &:hover {
            color: $text;
            background-color: transparent;
            outline: 1px solid $text ;

            .btn-svg-next {
                fill: $text
            }
        }
    }
}

.btn-replay {
    color: white;

    &:hover {
        color: $text-dull;

        .btn-svg {
            fill: $text-dull
        }
    }
}


@media (max-width: 670px) {
    .main-stats {
        max-width: 350px;

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
</style>