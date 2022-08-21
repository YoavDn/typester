    
<script setup lang='ts'>

import ColorTheme from '@/assets/imgs/colorTheme.svg'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const isOnHomeRoute = computed(() => {
    return { hidden: route.name === 'Home' }
})
</script>
    

<template>

    <section class="botton" :class="isOnHomeRoute">
        <div class="set-goal">
            <h2>here you will set the goal</h2>
        </div>
        <footer class="main-footer flex">
            <div class="footer-links flex">
                <div class="footer-link flex">

                    <h2 class="txt-light">Linkedin</h2>
                </div>
                <div class="footer-link flex">
                    <h2 class="txt-light">&ltCode\&gt</h2>
                </div>

            </div>
            <div class="game-theme flex">
                <colorTheme class="color-theme-svg" />
                <h2 class="txt-light">Theme</h2>
            </div>
        </footer>
    </section>

</template>
    
 <style lang="scss" >
 @import '@/assets/style/main.scss';
 
 .botton {
     width: 100%;
 
     .set-goal {
         text-align: center;
         font-size: 2rem;
         color: $text-dull;
 
         margin-block: 2rem;
     }
 
     .main-footer {
         justify-content: space-between;
         width: 100%;
         color: $text-dull;
 
         .game-theme {
             cursor: pointer;
             align-items: center;
 
             h2 {
                 font-size: 1.3rem;
             }
 
             .color-theme-svg {
                 fill: $text-dull;
                 margin-inline-end: 1rem;
             }
 
             &:hover {
                 h2 {
                     color: $text
                 }
 
                 .color-theme-svg {
                     fill: $text;
                 }
 
             }
         }
 
         .footer-links {
             cursor: pointer;
 
             .footer-link {
                 margin-inline: 10px;
                 align-items: flex-end;
 
                 h2 {
                     font-size: 1.3rem;
                     line-height: 23px;
                 }
 
                 .footer-link-svg {
                     height: 26px;
                     width: 16px;
                     fill: $text-dull;
                     margin-right: 6px;
                 }
 
                 &:hover {
 
                     color: $text;
 
                     .footer-link-svg {
                         fill: $text;
                     }
                 }
             }
 
         }
     }
 }
 </style>

