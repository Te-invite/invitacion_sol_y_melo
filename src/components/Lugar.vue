<script>
import Boton from './Boton.vue';
import TitleSection from './TitleSection.vue';
import ornamento2 from '../assets/img/ornamento2(copia).webp';
import Swal from 'sweetalert2';
export default {
      name:'Lugar',
      data(){
        return {
            text:'La Rural - Salón grande',
            text2: 'Entrada por Ruta 3 - Tres Arroyos', ornamento2,
            mapUrl:'https://maps.app.goo.gl/RVNysZz6pGnucmy19'
        }
      },
      components: { TitleSection, Boton },
      methods:{
        openMap(){
            window.open(this.mapUrl, '_blank');
        },
        redirectToSheet() {
            Swal.fire({
                title: 'Info!',
                text: 'Será redirigido a Google Maps. Para continuar presione OK, o Cancelar para cerrar.',
                icon: 'info',
                showCancelButton: true, 
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancelar', 
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open("https://maps.app.goo.gl/RVNysZz6pGnucmy19");
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // Si el usuario presiona "Cancelar", cierra el popup de SweetAlert
                    this.openMap();
                }
            });
        }
    }

}
</script>
<template>
    <div class="lugar_container">
        <TitleSection title="Lugar"/>
        <span class="lugar_txt">
            <h3 class="lugar_title">{{ text }}</h3>
            <p class="lugar_text">{{text2}}</p>
        </span>
        <Boton label="¿CÓMO LLEGAR?" customClass="btn-mayor custom_btn_invitacion" @click="redirectToSheet()"/>
        <img :src="ornamento2" alt="">
    </div>
</template>
<style>
.lugar_container{
    width:100%;
    height:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border:1px solid red;
}
.lugar_txt{
    width:200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border:1px solid red;
}
.lugar_title{
    font-size: 14px;
    font-family: var(--font-btn-bold);
    font-weight: 900;
    line-height: 90%;
    text-align: center;
}
.lugar_text{
    font-size: 10px;
    font-family: var(--font-btn);
    font-weight: normal;
    text-align: center;
}
</style>