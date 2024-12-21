<script>

import Boton from '../components/Boton.vue';
import Portada from '../components/Portada.vue';
export default {
    name: "Home",
    components: { Boton, Portada },


    methods: {
        enter() {
            this.$router.push({ name: 'Invitacion' });
        }
    }
}
</script>
<template>
    <div class="home_container">
        <div class="home_body">
            <div class="home_content">
                <Portada />
                <div class="home_btn">
                    <Boton label="INGRESAR" customClass="btn-mayor custom_btn" @click="enter()" />
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.home_container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home_body {
    width: 80%;
    height: 95%;
    background: var(--color-body);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.home_content{
    width:100%;
    height:400px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.custom_btn {
    background: transparent;
    font-size: 12px;
    font-family: var(--font-btn);
    color: var(--color_font_btn);
    border: 1px solid var(--line_btn);
    margin-top: 3rem;
}

.custom_btn:hover {
    color: var(--line_btn);
    border: 1px solid var(--color_font_btn);
}
@media (min-width: 1024px) {
    .home_body {
        width: 95%;
        height: 100%;
        margin: 32px 0;
    }
}
</style>