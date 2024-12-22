<script>

export default {
  name: 'TitleSection',
  props: {
    title: {
      type: String,
      required: true, // El título debe ser pasado como prop
    }
  }
}
</script>
<template>
    <div class="container_title" data-aos="fade-right">
        <h1 class="titleSection" >{{ title }}</h1>
    </div>
</template>
<style>
.container_title {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.titleSection {
    font-family:var(--font-title-section);
    color:var( --font-primary-color);
    font-size: 60px;
    text-align: center;
}

@media (min-width: 768px) and (max-width: 991px) {
    .container_title {
        width: 100%;
        height: 80px;
        margin-top:1.5rem;
    }

    .titleSection {
        font-size: 90px;
    }
}

@media (min-width: 1025px) {
    .container_title {
        width: 100%;
        height: 140px;
    }

    .titleSection {
        font-size: 140px;
    }
}
</style>