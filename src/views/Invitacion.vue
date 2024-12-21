<script>
import PortadaInvitacion from '../components/PortadaInvitacion.vue';
import linea_fina from '../assets/img/linea_fina.svg';
import TitleSection from '../components/TitleSection.vue';
import Timer from '../components/Timer/Timer.vue';
import Asistencia from '../components/Asistencia.vue';
import Lugar from '../components/Lugar.vue';
import DressCode from '../components/DressCode.vue';
import Regalo from '../components/Regalo.vue';
import Footer from '../components/Footer.vue';
export default {
    name:'Invitacion',
    components: {PortadaInvitacion, TitleSection, Timer, Asistencia, Lugar, DressCode, Regalo, Footer },
    data(){
        return{
            linea_fina
        }
    },
    methods: {
        scrollTo(hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>
<template>
    <div class="invitacion_container">
        <div class="invitacion_body">
            <PortadaInvitacion/>
            <img :src="linea_fina" class="separador" alt="linea">
            <Timer/>
            <Asistencia/>
            <Lugar/>
            <DressCode/>
            <Regalo/>
            <div class="option">
                <a href="#dias" class="opcion" @click.prevent="scrollTo('#dias')">Confirmar Asistencia |</a>
                <a href="#horario" class="opcion" @click.prevent="scrollTo('#horario')">¿Cómo llegar? |</a>
                <a href="#lugar" class="opcion" @click.prevent="scrollTo('#lugar')">Dresscode</a>
            </div>
        </div>
        <Footer></Footer>
        
    </div>
</template>
<style>
.invitacion_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}

.invitacion_body {
    width: 80%;
    height: 100%;
    margin: 48px 0 0;
    flex-grow: 1;
    background: var(--color-body);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 0;
}
.separador{
    margin:0 0;
}
.option{
    margin-top:1rem;
   width:200px;
   display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    position:relative;
    z-index:2;
}
.opcion{
    color:var(--title-timer);
    font-size:.5rem;
    font-family: var(--font-btn);
    color:var(--color_font_btn);
    text-decoration: none;
}
@media (min-width: 1024px) {
    .invitacion_body {
        width: 95%;
        height: 100%;
        margin: 32px 0;
    }
}
</style>