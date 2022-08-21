<script lang='ts'>
import VueApexCharts from 'vue3-apexcharts'
import { defineComponent, reactive, ref, computed } from 'vue';
import type { testType } from '@/types';
import { useTestStore } from '@/stores/test';


export default defineComponent({
    name: 'chart',
    components: {
        apexcharts: VueApexCharts
    },

    props: ['test'],
    setup(props) {
        const wordsWpm = computed(() => props.test.txt.map(({ wpm }) => wpm).slice(0, props.test.currWord.idx))

        const series = ref([{
            name: 'word',
            data: wordsWpm
        }])
        const chartOptions = reactive({
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 1.5,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'numeric'

                },

                tooltip: {
                    enabled: true,
                },
                toolbar: {
                    show: false,
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        color: '#255aee',
                        shadeTo: 'light',
                        shadeIntensity: 0.65
                    }
                },

                title: {
                    text: 'Word Per Minute',
                    align: 'left',
                    margin: 10,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                        fontSize: '14px',
                        fontWeight: 'thin',
                        fontFamily: undefined,
                        color: 'gray'
                    },
                },
                chart: {
                    toolbar: {
                        show: false,
                    },
                },

                grid: {
                    show: true,
                    borderColor: '#888888',
                    strokeDashArray: 0,
                    position: 'back',
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                    row: {
                        colors: undefined,
                        opacity: 0.5
                    },
                    column: {
                        colors: "#888888",
                        opacity: 0.5
                    },
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                }

            },

        })

        return {
            series,
            chartOptions

        }
    },
})
</script>


<template>
    <div>
        <apexchart type="area" height="350" :options="chartOptions.chartOptions" :series="series"></apexchart>
    </div>
</template>


<style lang='scss'>
</style>