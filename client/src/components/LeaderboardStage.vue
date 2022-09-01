<script setup lang='ts'>
import { UserIcon } from '@heroicons/vue/24/solid';
import CrownSvg from '@/assets/imgs/crown.svg'

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
                <UserIcon class="user-icon" />
                <h2>Yoav Mendelson</h2>
            </div>
            <div class="second-user user-champ">
                <UserIcon class="user-icon" />
                <h2>user second</h2>
            </div>
            <div class="third-user user-champ">
                <UserIcon class="user-icon" />
                <h2>user third</h2>
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

    .main-title {
        color: var(--text);
        text-align: center;
    }

    .leaderboard-stage-grid {
        display: grid;
        // background-color: red;

        grid-template-areas:
            ".    .      ."
            ".    .      ."
            ".    king   ."
            ".    uf     us"
            "ut   uf     us"
            "ut   f      us"
            "ut   f      s"
            "t    f      s"
            "t    f      s"
        ;

        grid-template-columns: repeat(3, minmax(150px, 1fr));
        grid-auto-rows: minmax(50px, auto);



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
            margin-bottom: 1rem;

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
</style>