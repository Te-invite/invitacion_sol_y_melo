<script>
import TitleSection from './TitleSection.vue';
import Boton from './Boton.vue';
export default {
    name:'Regalo',
    components:{TitleSection, Boton}
}
</script>
<template>
    <div class="regalos_container">
        <TitleSection title="Regalos"/>   
        <div class="regalo_boton">
            <Boton label="DATOS BANCARIOS" customClass="btn-mayor custom_btn_asistencia" />
        </div>
    </div>
</template>
<style>
.regalos_container{
    width:100%;
    height:110px;
    border:1px solid red;
    display:flex;
    flex-direction: column;
    align-items: center;
}
.regalo_boton{
    border:1px solid red;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
}
</style>