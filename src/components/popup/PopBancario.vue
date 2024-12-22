<script>
import PopupBase from './PopupBase.vue';
import Swal from 'sweetalert2';
import Boton from '../Boton.vue';
import plantaRight from '../../assets/img/ornamento2(copia).webp'
export default {
    name: "PopBancario",
    components: {
        PopupBase,
        Boton
    },
    data() {
        return {
            modalTitle: 'Regalos',
            banco: 'Banco Galicia',
            name: 'Carmelo Di Vito',
            cvu: '00701064-30004157276816',
            alias: 'Carmelo.dv',
            cuil: '20-34624727-5',
            cuenta: '4157276-8 106-1',
            plantaRight
        }
    },
    methods: {
        copyToClipboard(text) {
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            Swal.fire({
                title: 'OK!',
                icon: 'success',
                text: '¡El texto ha sido copiado!',
                confirmButtonText: 'OK'
            });
        }

    }
}
</script>
<template>
    <popup-base :title="modalTitle">
        <div class="containerPlantaRight">
                <img :src="plantaRight" class="plantaRight" alt="">
        </div>
        <div class="modal-body">
            
            <div class="info_bancario">
                <div class="div txt_bank">
                    <h1 class="title_bank">{{ banco }}</h1>
                </div>
                <div class="div txt_bank">
                    <h3 class="title_bank">{{ name }}</h3>
                </div>
                <span class="txt_bank">
                    <h3 class="title_bank">CTA: </h3>
                    <p class="text_bank">{{ cuenta }}</p>
                </span>
                <span class="txt_bank">
                    <h3 class="title_bank">CBU: </h3>
                    <p class="text_bank">{{ cvu }}</p>
                </span>
                <span class="txt_bank">
                    <h3 class="title_bank">AlÍAS : </h3>
                    <p class="text_bank">{{ alias }}</p>
                </span>
                <span class="txt_bank">
                    <h3 class="title_bank">CUIL: </h3>
                    <p class="text_bank">{{ cuil }}</p>
                </span>
            </div>
            
        </div>
        <template #footer>
            <div class="pop-up-footer">
                <Boton label="COPIAR CBU" customClass="btn-mayor btn btn_bank custom_btn_invitacion"
                    @click="copyToClipboard(cvu)" />
                <Boton label="COPIAR ALÍAS" customClass="btn-mayor btn btn_bank custom_btn_invitacion"
                    @click="copyToClipboard(alias)" />
            </div>

        </template>
    </popup-base>
</template>
<style>
.modal-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info_bancario {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.txt_bank {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
}
.containerPlantaRight{
    position:absolute;
    width:152px;
    height:152px;
    right:-14%;
    top:12%;
    z-index:2;
}
.plantaRight{
    width:100%;
    clip-path: inset(0px 53px 0px 0px);    
    object-fit: cover;
}
.title_bank {
    font-family: var(--font-btn-bold);
    font-size: .8rem;
    line-height: 80%;
}

.text_bank {
    font-family: var(--font-btn-light);
    margin-top: .5rem;
    font-size: .8rem;
}

.pop-up-footer {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
@media (min-width: 768px) and (max-width: 991px) {
    .input_nombre{
        width: 80%;
    }
    .containerPlantaRight{
        right:-12%;
    }
    .title_bank,
    .text_bank{
        font-size: 1rem;
    } 
}
@media (min-width: 1024px) {
    .pop-up-footer {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .btn_bank{
        width:200px;
    }
    .containerPlantaRight{
        right:-8%;
    }
    .modal-body {
        width: 80%;
    }
}
</style>