<script setup lang='ts'>
import { UserCircleIcon } from '@heroicons/vue/24/solid';

</script>


<template>
    <section class="table-wraper">
        <h2 class="table-title">All-Time Leaderboards</h2>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>wpm</th>
                    <th>accuracy</th>
                    <th>Date</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td class="table-user flex">
                        <UserCircleIcon class="user-table-svg" />
                        <h2>Yoav Mendelson</h2>
                    </td>
                    <td>89</td>
                    <td>89%</td>
                    <td>Aug 02 2022</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td class="table-user flex">
                        <UserCircleIcon class="user-table-svg" />
                        <h2>Yoav Mendelson</h2>
                    </td>
                    <td>89</td>
                    <td>89%</td>
                    <td>Aug 02 2022</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td class="table-user flex">
                        <UserCircleIcon class="user-table-svg" />
                        <h2>Yoav Mendelson</h2>
                    </td>
                    <td>89</td>
                    <td>89%</td>
                    <td>Aug 02 2022</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>


<style lang='scss'>
@import '@/assets/style/main.scss';

.table-wraper {
    border-collapse: collapse;
    background-color: black;
    border: solid 1px white;

    .table-title {
        color: white;
        // background-color: #fff;
        border-bottom: solid 2px white;
        text-align: center;
        font-weight: 500;
        padding: 2rem;
        font-size: 2.3rem;
        // line-height: 6rem;
    }

    table {
        // padding-top: 3rem;
        width: 100%;


        thead {
            border: solid 1px white;
        }

        .table-user {
            align-items: center;
            gap: 1.5rem;
            place-items: center left;

            .user-table-svg {
                font-size: 16px;
                width: 30px;
            }

        }

        tbody {
            border: none;

            tr:nth-child(odd) {
                background-color: rgba(71, 71, 71, 0.497);
            }
        }

        th {
            font-weight: 400;
            font-size: 1.5rem;
            padding: 1rem 4rem;
            color: var(--text-dull)
        }

        td {
            padding: 1rem 4rem;
            text-align: center;
            font-size: 1.5rem;
            color: white;
        }
    }
}
</style>