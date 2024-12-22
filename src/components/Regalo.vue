<script>
import TitleSection from './TitleSection.vue';
import PopBancario from './popup/PopBancario.vue';
import Boton from './Boton.vue';
export default {
    name:'Regalo',
    components:{TitleSection, Boton, PopBancario},
    data(){
       return{
        popup:false
       } 
    },
    methods: {
        togglePopUpBank(){
            this.popup = !this.popup
        }        
    }
}
</script>
<template>
    <div class="regalos_container">
        <TitleSection title="Regalos"/>   
        <div class="regalo_boton">
            <PopBancario v-show="popup" @close="togglePopUpBank()"/>
            <Boton label="DATOS BANCARIOS" customClass="btn-mayor custom_btn_invitacion" @click="togglePopUpBank()" />
        </div>
    </div>
</template>
<style>
.regalos_container{
    width:100%;
    height:110px;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.regalo_boton{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
}
@media (min-width: 1024px) {
    .regalos_container{
        width:100%;
        height:200px;
    }
}
</style>