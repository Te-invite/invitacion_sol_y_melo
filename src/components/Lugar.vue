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
                    Swal.close();
                }
            });
        }
    }

}
</script>
<template>
    <div  class="lugar_container" id="lugar" data-aos="fade-up">
        <TitleSection title="Lugar"/>
        <span class="lugar_txt">
            <h3 class="lugar_title">{{ text }}</h3>
            <p class="lugar_text">{{text2}}</p>
        </span>
        <Boton label="¿CÓMO LLEGAR?" customClass="btn-mayor custom_btn_invitacion" @click="redirectToSheet()"/>
        <img :src="ornamento2" class="planta_lugar" alt="">
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
}
.lugar_txt{
    width:200px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
@media (min-width: 768px) and (max-width: 991px) {
    .lugar_title{
        font-size: 1rem;
    }
    .lugar_txt{
        width:300px;
    }
    .lugar_text{
        font-size: 14px;
    }
    .planta_lugar{
        width: 162px;
        height: 162px;
    }
}
@media (min-width: 1024px) {
    .lugar_txt{
        width:450px;
    }
    .lugar_title{
        font-size: 1.5rem;
    }
    .lugar_text{
        font-size: 1.2rem;
    }
    .planta_lugar{
        margin-top:1rem;
        width: 182px;
        height: 182px;
    }
}
</style>