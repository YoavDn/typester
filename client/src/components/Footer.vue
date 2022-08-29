    
<script setup lang='ts'>
import { CodeBracketIcon } from '@heroicons/vue/24/solid';
import CustomToggleSwitch from './CustomToggleSwitch.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const isOnHomeRoute = computed(() => {
    return { hidden: route.name === 'Home' }
})

function linkToReop() {
    window.open('https://github.com/YoavDn/typester')
}
function linkToLinkedin() {
    window.open('https://www.linkedin.com/in/yoav-mendelson/')

}
</script>
    

<template>

    <section class="botton" :class="isOnHomeRoute">
        <div class="set-goal">
        </div>
        <footer class="main-footer flex">
            <div class="footer-links flex">
                <div @click="linkToLinkedin" class="footer-link flex">

                    <h2 class="txt-light">Linkedin</h2>
                </div>
                <div @click="linkToReop" class="footer-link flex align-center">
                    <CodeBracketIcon class="code-svg" />
                    <h2 class="txt-light">code</h2>
                </div>
            </div>
            <CustomToggleSwitch />
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
         color: var(--text-dull);
 
         margin-block: 2rem;
     }
 
     .main-footer {
         justify-content: space-between;
         width: 100%;
         color: var(--text-dull);
 
         .game-theme {
             cursor: pointer;
             align-items: center;
 
             h2 {
                 font-size: 1.3rem;
             }
 
             .color-theme-svg {
                 fill: var(--text-dull);
                 margin-inline-end: 1rem;
             }
 
             &:hover {
                 h2 {
                     color: var(--text)
                 }
 
                 .color-theme-svg {
                     fill: var(--text);
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
                     fill: var(--text-dull);
                     margin-right: 6px;
                 }
 
                 &:hover {
 
                     color: var(--text);
 
                     .footer-link-svg {
                         fill: var(--text);
                     }
                 }
             }
 
         }
 
         .code-svg {
             margin-inline: .4rem;
             width: 16px;
             height: 20px;
         }
     }
 }
 </style>

