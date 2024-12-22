<script>
import Counter from './Counter.vue';
import ornamento2 from '../../assets/img/ornamento2(copia).webp';
export default {
    name: 'Timer',
    components: { Counter },
    data() {
        return {
            ornamento2
        }
    }
};
</script>

<template>
    <div id="dias" class="section__timer" data-aos="fade-up">
        <div class="countdown">
            <!--Cargar fecha-->
            <Counter :year="2025" :month="3" :date="1" :hour="18" :minute="0" :second="0" :millisecond="31" />
        </div>
        <div class="ornamento">
            <img :src="ornamento2"  class="planta" alt="">
        </div>
    </div>
</template>

<style scoped>
.section__timer{
    width:100%; 
    height:auto;
    
}
.countdown{
    margin: 1rem 0;
}
.ornamento{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.ornamento > .planta{
    width: 117px;
    height: 117px;
}
@media (min-width: 768px) and (max-width: 991px) {
    .section__timer{
        width:100%;   
    }
    .ornamento > .planta{
        width: 162px;
        height: 162px;
    }
}

@media (min-width: 1024px) {
    .countdown{
        width: 100%;
        height:auto;
    }
    .ornamento > .planta{
        width: 182px;
        height: 182px;
    }
}
</style>