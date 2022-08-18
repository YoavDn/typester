
<script setup lang='ts'>
import { useTestStore } from '@/stores/test';
import Chart from '@/components/Chart.vue';

import { computed } from 'vue';
const testStore = useTestStore()
const test = computed(() => testStore.getTest)

</script>


<template>
    <section class="test-result">
        <div class="gradient-wapper">
            <div class="gradient1"></div>
            <div class="gradient2"></div>
            <div class="gradient3"></div>
        </div>
        <main class="main-stats flex">
            <article class="wpm-box stat-box">
                <div>
                    <p>Wpm</p>
                    <h2>39</h2>
                </div>
                <h3>Speed</h3>
            </article>
            <div class="stats-middle">
                <h2>Time:</h2>
                <h3 class="time-stat">15s</h3>
                <h2>Words:</h2>
                <h3 class="words-stat">43</h3>
            </div>
            <article class="acc-box stat-box">
                <div>
                    <p>Real accuracy 49%</p>
                    <h2>91%</h2>
                </div>
                <h3>Accuracy</h3>
            </article>

        </main>
        <div class="btns flex">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
        </div>
    </section>

    <section class="reslult-details">
        <Chart class="chart" />
    </section>

</template>


<style lang='scss'>
@import '@/assets/style/main.scss';

.stat-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // flex-basis: 45%;

    p {
        font-size: 1.3rem;
        color: $text-dull;
        align-self: flex-start;
    }

    h2 {
        font-weight: 900;
        font-size: 8rem;
        line-height: 7rem;
        padding-bottom: 1rem;
    }

    h3 {
        font-weight: 500;
        font-size: 3rem;
    }
}

.test-result {
    position: relative;
    color: $text;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .main-stats {
        max-width: 500px;
        min-height: 400px;
        width: 100%;
        font-family: 'inter', sans-serif;
        margin: auto;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;

        .stats-middle {
            // flex-basis: 10%;
            display: grid;
            flex-direction: column;
            gap: .4rem;
            grid-template-columns: 1fr auto;

            h2 {
                font-weight: 500;
            }

            h2,
            h3 {
                font-size: 1.7rem;
            }

            .words-stat {
                justify-self: center;
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
}
</style>