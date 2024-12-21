<script>
import TitleSection from './TitleSection.vue';
import PopupAsistencia from './popup/PopupAsistencia.vue';
import Boton from '../components/Boton.vue'
export default {
    name: 'Asistencia',
    components: { TitleSection, Boton, PopupAsistencia },
    data() {
        return {
            subtitle_section: '¿LISTO PARA FESTEJAR?',
            text: 'Los esperamos el día 01 de Marzo de 2025',
            confirmacion: '(Hasta 15 de Febrero)',
            popup:false
        }
    },
    methods: {
        togglePopUp(){
            this.popup = !this.popup
        }        
    }
}
</script>
<template>
    <div class="asitencia_container">
        <h3 class="asistencia_subtitle">{{ subtitle_section }}</h3>
        <TitleSection title="Ceremonia & Fiesta" />
        <div class="asistencia_content">
            <span class="asistencia_txt">
                <p class="text_asistencia">{{ text }}</p>
            </span>
            <div class="asistencia_boton">
                <PopupAsistencia v-show="popup" @close="togglePopUp()"/>
                <Boton label="CONFIRMAR ASISTENCIA" customClass="btn-mayor custom_btn_invitacion" @click="togglePopUp()"/>
                <p class="fecha_confirmacion">{{ confirmacion }}</p>
            </div>
        </div>

    </div>
</template>
<style>
.asitencia_container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.asistencia_content {
    width: 100%;
    height: 150px;
    /*modificar */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.asistencia_subtitle {
    font-family: var(--font-btn);
    font-weight: 500;
    font-size: .8rem;
}

.asistencia_txt {
    width: 200px;
    display: flex;
    align-items: center;
}

.text_asistencia {
    font-family: var(--font-btn);
    text-align: center;
    font-size: 14px;
}

.custom_btn_asistencia {
    background: transparent;
    font-size: 12px;
    font-family: var(--font-btn);
    color: var(--font-secondary-dark);
    border: 1px solid var(--font-secondary-dark);
   
}

.asistencia_boton {
    border:1px solid red;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.fecha_confirmacion {
    font-size: .5rem;
    font-family: var(--font-btn);
    font-weight: normal;
}
</style>