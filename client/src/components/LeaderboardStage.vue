<script setup lang='ts'>
import type { leaderboardItem } from '@/types';
import { UserIcon } from '@heroicons/vue/24/solid';
import CrownSvg from '@/assets/imgs/crown.svg'

const props = defineProps<{ leaderboardList: leaderboardItem[] }>()

</script>


<template>
    <section class="leaderboard-stage">
        <main class="leaderboard-stage-grid">
            <div class="first-place stage">
                <h2>1</h2>
            </div>
            <div class="second-place stage">
                <h2>2</h2>
            </div>
            <div class="third-place stage">
                <h2>3</h2>
            </div>
            <div class="first-user user-champ">
                <UserIcon class="user-icon" v-if="!props.leaderboardList[0].user.imgUrl" />
                <img class="user-img" :src="props.leaderboardList[0].user.imgUrl" alt="">

                <h2>{{ props.leaderboardList[0].user.username }}</h2>
            </div>
            <div class="second-user user-champ">
                <UserIcon class="user-icon" v-if="!props.leaderboardList[1].user.imgUrl" />
                <img class="user-img" :src="props.leaderboardList[1].user.imgUrl" alt="" />
                <h2>{{ props.leaderboardList[1].user.username }}</h2>
            </div>
            <div class="third-user user-champ">
                <UserIcon class="user-icon" v-if="!props.leaderboardList[2].user.imgUrl" />
                <img class="user-img" :src="props.leaderboardList[2].user.imgUrl" alt="" />
                <h2>{{ props.leaderboardList[2].user.username }}</h2>
            </div>
            <div class="king">
                <CrownSvg />
            </div>
        </main>

    </section>
</template>


<style lang='scss'>
@import '@/assets/style/main.scss';

.leaderboard-stage {
    width: 100%;

    .main-title {
        color: var(--text);
        text-align: center;
    }

    .leaderboard-stage-grid {
        display: grid;
        // background-color: red;

        grid-template-areas:
            ".    .      ."
            ".    king   ."
            ".    uf     us"
            "ut   uf     us"
            "ut   f      us"
            "ut   f      s"
            "t    f      s"
            "t    f      s"
        ;

        grid-template-columns: repeat(3, minmax(30%, 1fr));
        grid-auto-rows: minmax(40px, auto);



        .stage {
            color: white;
            display: flex;
            width: 100%;
            justify-content: center;
            border: solid 1px white;
            background-color: black;

            h2 {
                font-family: 'Courier New', Courier, monospace;
                align-self: center;
                font-weight: 500;
            }
        }

        .first-place {
            grid-area: f;

            h2 {
                font-size: 9rem;
            }
        }

        .second-place {
            grid-area: s;

            h2 {
                font-size: 6rem;
            }
        }

        .third-place {
            grid-area: t;

            h2 {
                font-size: 3rem;
            }
        }

        .user-champ {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;


            h2 {
                color: var(--text);
                font-size: 2.5rem;
                line-height: 5rem;
            }

            .user-icon {
                max-width: 125px;
                padding: 2rem;
                max-width: 125px;

                color: white;
                border: solid 1px transparent;
                background-color: black;
                background:
                    linear-gradient(black, black) padding-box,
                    white;
                -webkit-text-fill-color: transparent;
                -webkit-text-fill-color: transparent;
                border-radius: 50%;



            }

            .user-img {
                max-width: 325px;
                width: 125px;
                border: solid 2px transparent;
                background-color: black;
                background:
                    linear-gradient(black, black) padding-box,
                    white;
                -webkit-text-fill-color: transparent;
                -webkit-text-fill-color: transparent;
                border-radius: 50%;
            }

            @media (max-width: 670px) {
                margin-bottom: 0;

                h2 {
                    font-size: 1.4rem;
                    line-height: 3rem;
                }

                .user-icon {

                    max-width: 70px;
                    padding: 1rem;
                }
            }
        }

        .first-user {
            grid-area: uf;

            .user-icon {
                max-width: 150px;

                color: white;
                border: solid 2px transparent;
                background-color: black;
                background:
                    linear-gradient(black, black) padding-box,
                    linear-gradient(to top right, #ffea00, #ff7b00) border-box;
                -webkit-text-fill-color: transparent;
                border-radius: 50%;
                box-shadow: rgb(216, 157, 47) 0px 0px 70px;

            }

            .user-img {
                background:
                    linear-gradient(black, black) padding-box,
                    linear-gradient(to top right, #ffea00, #ff7b00) border-box;
                -webkit-text-fill-color: transparent;

                box-shadow: rgb(216, 157, 47) 0px 0px 70px;
            }

            @media (max-width: 670px) {
                .user-icon {
                    max-width: 100px;
                }
            }
        }

        .second-user {
            grid-area: us;
        }

        .third-user {
            grid-area: ut;
        }

        .king {
            margin: auto;
            align-items: center;
            grid-area: king;
            width: 60px;
            fill: #ffc300
        }
    }
}

@media (max-width: 420px) {

    .leaderboard-stage {


        .leaderboard-stage-grid {
            display: grid;
            grid-auto-rows: minmax(20px, auto);

            // background-color: red;
            .stage {

                h2 {
                    font-size: 3rem;
                }
            }


            .user-champ {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;


                h2 {
                    color: var(--text);
                    font-size: 1.2rem;
                    margin-block: 1rem;
                    line-height: 1.4rem;
                    text-align: center;
                }

                .user-icon {
                    padding: 1rem;
                    max-width: 60px;

                }

            }

            .king {
                width: 30px;
            }

        }
    }
}
</style>