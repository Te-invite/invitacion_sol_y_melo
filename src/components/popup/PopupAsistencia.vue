<script>
import PopupBase from './PopupBase.vue';
import Boton from '../Boton.vue';
import Swal from 'sweetalert2';
import planta from '../../assets/img/ornamento2.png';
export default {
    components: {
        PopupBase, Boton
    },
    data() {
        return {
            modalTitle: 'Asistiré?',
            options1: 'Sí',
            options2: 'No',
            inputName:'Nombre Completo',
            inputTxtArea: 'Información adicional (opcional):',
            isAttending: '',
            nombre: '',
            informacionAdicional: '',
            errorMessage: '',
            planta
        };
    },
    methods: {
        enviarAWhatsApp() {
            if (!this.nombre || !this.isAttending) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Por favor, complete todos los campos requeridos',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                return;
            }

            const mensaje = `Nombre: ${this.nombre}\n
                Asistiré: ${this.isAttending === 'yes' ? 'Sí' : 'No'}\n
                Cantidad de invitados: ${this.numMembers}\n
                Información adicional: ${this.informacionAdicional}`;
                const mensajeSinTabulacion = mensaje.replace(/\n/g, ' ').replace(/\t/g, ' ').trim();
            const telefono ='+2983383122';
            const enlaceWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeSinTabulacion)}`;

            Swal.fire({
                title: 'Info!',
                text: 'Será redirigido a WhatsApp para confirmar el envío del mensaje.',
                icon: 'info',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(enlaceWhatsApp, '_blank');
                }
            });
        },
        updateTextAreaVisibility() {
            this.informacionAdicional = this.adultsOnlySelected || this.hasChildrenSelected ? this.informacionAdicional : '';
        }
    },
  computed: {
    isFormIncomplete() {
      return !this.nombre || !this.isAttending;
    }
  }
};
</script>
<template>
    <popup-base :title="modalTitle">
        <div class="modal-body">
            <div class="content__radio content__radio1">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="attendingYes" name="attendance"
                        v-model="isAttending" value="yes" />
                    <label class="form-check-label" for="attendingYes">{{ options1 }}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="attendingNo" name="attendance"
                        v-model="isAttending" value="no" />
                    <label class="form-check-label" for="attendingNo">{{ options2 }}</label>
                </div>
            </div>
            <div class="form-group mb-3 input_nombre" >
                <label for="nombre" class="form-label">{{ inputName }}</label>
                <input type="text" class="form-control input_text" id="nombre" v-model="nombre"
                    placeholder=""/>
            </div>
            <div class="form-group mb-3 selector" >
                <label for="numMembers" class="form-label">Cantidad de invitados (sin hijos):</label>
                <select id="numMembers" name="numMembers" class="form-select" aria-label="Default select example" v-model="numMembers">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="form-group mb-3 box_text_area">
                <label for="informacionAdicional" class="form-label">{{ inputTxtArea }}</label>
                <textarea class="form-control input_text" id="informacionAdicional" v-model="informacionAdicional"
                rows="1" placeholder="Ej. alergias, intolerancias alimentarias"></textarea>
            </div>
        </div>
        <template #footer>
            <Boton label="CONFIRMAR ASISTENCIA" customClass="btn-mayor btn custom_btn_invitacion" @click="enviarAWhatsApp()"/>
        </template>
        <div class="container_planta">
            <img :src="planta" class="planta_botom" alt="">
        </div>
    </popup-base>
</template>

<style scoped>

.modal-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-label{
    font-size:14px;
    font-family: var(--font-btn);
    color:var(--font-secondary-dark);
    line-height:100%;
    text-align:center;
    margin-bottom:.3rem;
    letter-spacing: 2px;
}
.box_text_area{
    width:80%;
    display:flex;
    flex-direction: column;
    align-content: center;
}
.form-check-input {
    border: 2px solid var(--color_font_btn);
}
.input_nombre{
    margin-top:.8rem;
    display:flex;
    flex-direction:column;
    align-items: center;
    width:270px;
}
.input_text{
    width:100%;
    background: transparent;
    border:none;
    border-radius:0%;
    border-bottom: 1px solid var(--color_font_btn);
    font-size:.8rem;
    font-family: var(--font-btn);
    color:var(--font-secondary-dark);
}
.form-control::placeholder{
    color: var(--font-secondary);
    font-size:.6rem;
    text-align: center;
    margin-bottom:0;
}
.selector{
    width:85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row; 
}
.form-select{
    color:var(--font-secondary-dark);
    border:1px solid var(--font-secondary-dark);
    background: var(--color-body);
}
.form-select{
    height:40px;
    width:70px;
    border-radius: 20px;
}
.form-check-label{
    font-family: var(--font-btn);
    color:var(--font-secondary-dark);
}
.btn{
    margin-bottom:1rem;
}
.container_planta{
    /* width:15px;
    height:120px; */
    position:absolute;
    left:0;
    bottom:-8%;
    z-index:2;
}
.planta_botom{
    clip-path: inset(0px 0px 40px 0px);    
    object-fit: cover;
}


@media(max-width:360px) {

    .circle {
        width: 45px;
        height: 45px;
    }


}

@media (min-width: 768px) and (max-width: 991px) {
    .input_nombre{
        width: 80%;
    }
    .form-label{
        font-size:1rem;
    }
    .container_planta{
        bottom:-7%;
    }
}

@media (min-width: 1025px) {
    .input_nombre{
        width: 80%;
    }
    .form-label{
        font-size:1.5rem;
    }
    .container_planta{
        bottom:-13%;
    }
    .planta_botom{
        width:200px;
        height:200px;
        clip-path: inset(0px 0px 70px 0px);   
    }

}
</style>