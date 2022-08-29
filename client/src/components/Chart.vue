<script lang='ts'>
import VueApexCharts from 'vue3-apexcharts'
import { defineComponent, reactive, ref, computed } from 'vue';
import type { testType, wordType } from '@/types';
import { useTestStore } from '@/stores/test';


export default defineComponent({
    name: 'chart',
    components: {
        apexcharts: VueApexCharts
    },

    props: ['test'],
    setup(props) {
        const wordsWpm = computed(() => props.test.txt.map((txt: wordType) => txt.wpm).slice(0, props.test.currWord.idx))

        const series = ref([{
            name: 'word',
            data: wordsWpm
        }])
        const chartOptions = reactive({
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 1.5,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'numeric',
                    title: {
                        text: 'words',
                        style: {
                            color: 'black',
                            fontSize: '16px',
                            fontWeight: 'light'
                        }
                    },
                    axisBorder: {
                        show: false,

                    },
                    axisTicks: {
                        show: false,
                    },
                    crosshairs: {
                        show: false,
                    }
                },
                yaxis: {
                    title: {
                        text: 'Words per minute',
                        style: {
                            // color: 'gray',
                            fontSize: '16px',
                            fontWeight: 'light'
                        }
                    }
                },
                markers: {
                    size: 3,
                    strokeWidth: 0,

                    hover: {
                        size: 9
                    }
                },
                tooltip: {
                    enabled: true,
                    theme: 'dark',
                    style: {
                        fontSize: '12px',
                        color: "white",
                        fontFamily: undefined
                    },
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

                    row: {
                        colors: undefined,
                        opacity: 0.5
                    },
                    column: {
                        colors: undefined,
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
@import '@/assets/style/main.scss';
</style>