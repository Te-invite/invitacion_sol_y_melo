<script>
export default {
    name:'PortadaInvitacion',
    data(){
        return{
            nombre:'Sol & Melo',
            fecha:'01. 03. 25'
        }
    }
}
</script>
<template>
    <div class="portada_inv_container">
        <div class="invitacion_fecha">
            <div class="linea"></div>
            <h1 class="fecha_portada">{{ fecha }}</h1>
            <div class="linea"></div>
        </div>
        <h1 class="nombre_portada">{{ nombre }}</h1>
        <div class="linea_bottom"></div>

    </div>
</template>
<style>
.portada_inv_container{
    width:100%;
    /* border:1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.invitacion_fecha{
    /* border:1px solid red; */
    width:250px;
    height:28px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
.linea{
    width: 70px;
    height: 1px;
    border-radius: 100px;
    background:
        var(--plata, linear-gradient(180deg, #E6E6E6 11%, #6B6B6B 21%, #E3E3E3 29%, #616161 55%, #B1B1B1 82%, #FAFAFA 89%, #6B6B6B 100%));
}
.fecha_portada{
    /* border:1px solid red; */
    font-family: var(--font-subtitle);
    text-align: center;
    color: var(--font-secondary);
    font-size: 1.5rem;
}
.nombre_portada{
    font-size:48px;
    color:var(--font-primary-color);
    font-family: var(--font-title);
    font-weight: normal;
}
.linea_bottom{
    width: 250px;
    height: 1px;
    border-radius: 100px;
    background:
        var(--plata, linear-gradient(180deg, #E6E6E6 11%, #6B6B6B 21%, #E3E3E3 29%, #616161 55%, #B1B1B1 82%, #FAFAFA 89%, #6B6B6B 100%));
}
</style>