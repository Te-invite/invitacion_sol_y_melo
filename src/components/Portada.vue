<script>
import planta from '../assets/img/ornamento1.webp';
export default {
    name: 'portada',
    data() {
        return {
            planta,
            inicial1: "S",
            inicial2: "M",
            fecha: '01.03.25'
        }
    }

}
</script>
<template>
    <div class="home_portada">
        <div class="home_title">
            <h1 class="inicial letra1">{{ inicial1 }}</h1>
            <img :src="planta" alt="ornamento" class="img1">
            <h2 class="inicial letra2">{{ inicial2 }}</h2>
        </div>
        <div class="linea-vertical"></div>
        <div class="home_time">
            <h3 class="fecha">{{ fecha }}</h3>
        </div>
    </div>
</template>
<style>
.home_portada {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.home_title {
    width: 150px;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: auto;
    align-items: center;
    margin-bottom: 1rem;

}

.inicial {
    width: 55px;
    height: 92px;

    flex-shrink: 0;
    color: #A47764;
    font-family: "Loreal Shilone";
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.img1 {

    width: 24.806px;
    height: 53.528px;
}

.linea-vertical {
    width: 200px;
    height: 1px;
    /* Ajusta la altura según tus necesidades */
    border-radius: 100px;
    background:
        var(--plata, linear-gradient(180deg, #E6E6E6 11%, #6B6B6B 21%, #E3E3E3 29%, #616161 55%, #B1B1B1 82%, #FAFAFA 89%, #6B6B6B 100%));
}

.home_time {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.fecha {
    font-family: var(--font-subtitle);
    text-align: center;
    color: var(--font-secondary);
    font-size: 1.5rem;
}

@media (min-width: 768px) and (max-width: 991px) {
    .home_title {
        width: 180px;
    }

    .inicial {
        width: auto;
        height: 92px;
        font-size: 100px;
    }

    .img1 {
        width: auto;
        height: 80px;
    }

    .linea-vertical {
        width: 250px;
    }

    .fecha {
        font-size: 2rem;
    }
}

@media (min-width: 1024px) {
    .home_title {
        width: 300px;
    }

    .inicial {
        width: auto;
        height: 150px;
        font-size: 150px;
    }

    .img1 {
        width: auto;
        height: 100px;
    }

    .linea-vertical {
        width: 450px;
    }

    .fecha {
        font-size: 2.5rem;
    }
}
</style>