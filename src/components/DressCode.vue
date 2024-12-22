<script>
import TitleSection from './TitleSection.vue';
export default {
    name:"DressCode",
    components:{TitleSection},
    data(){
        return{
            text:'ELEGANTE'
        }
    }
}
</script>
<template>
    <div class="dress_container" id="dress" data-aos="fade-up-left">
        <TitleSection title="Dresscode"/>   
        <span class="dresscode_txt">
            <p class="text_asistencia">{{ text }}</p>
        </span>
    </div>
</template>
<style>
.dress_container{
    margin-top:1rem;
    width:100%;
    height:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.dress_txt{
    width: 200px;
    display: flex;
    align-items: center;
}

</style>