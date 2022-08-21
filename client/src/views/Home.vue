<script setup lang='ts'>

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
                <li class="home-title">Type.</li>
                <li class="home-title">Sleep.</li>
                <li class="home-title">Reapet.</li>
            </ul>
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
    // background-color: red;

    .main-text {

        margin: auto;

        ul {
            font-family: 'inter', sans-serif;
        }

        .home-title {
            text-align: center;
            font-size: 8rem;
            line-height: 11rem;
            font-weight: 900;
            color: $text;
        }
    }
}
</style>