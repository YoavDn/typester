<script setup lang='ts'>
import type { testType } from '@/types';
const props = defineProps<{ test?: testType }>()
</script>


<template>
    <main class="main-stats flex">
        <article class="wpm-box stat-box">
            <div>
                <p>Wpm</p>
                <h2>{{ props.test ? props.test.wpm : "--" }}</h2>
            </div>
            <h3>Speed</h3>
        </article>
        <div class="stats-middle">
            <h2>Time:</h2>
            <h3 class="time-stat">{{ props.test ? Math.round(props.test?.time) + "s" : '--' }}</h3>
            <h2>Words:</h2>
            <h3 class="words-stat">{{ props.test ? props.test?.currWord.idx + 1 : '--' }}</h3>
        </div>
        <article class="acc-box stat-box">
            <div>
                <p>Real accuracy <span>{{ props.test?.realAcc }}</span> %</p>
                <h2>{{ props.test ? props.test.acc + "%" : '--' }}</h2>
            </div>
            <h3>Accuracy</h3>
        </article>

    </main>
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
        color: var(--text-dull);
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

.main-stats {
    z-index: 2;
    max-width: 500px;
    min-height: 400px;
    width: 100%;
    font-family: 'Inter', sans-serif;
    margin: auto;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    .stats-middle {
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
</style>