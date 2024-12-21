<script>
export default{
    name:'Boton',
    props: {
    label: {
      type: String,
      required: false 
    },
    customClass: {
      type: String,
      default: 'btn-mayor'
    }
  }

}
</script>
<template>
   <button type="button" :class="['btn', customClass, 'btn-lg']">
      {{ label }}
    </button>
</template>
<style>
.btn-mayor{
    width: 250px;
    height:50px;
    background: transparent;
    padding: .75rem 1.5rem;
    font-weight: normal;
    border-radius: 10px;
    font-style: normal;
}
@media (min-width: 768px) and (max-width: 991px) {
  .btn-mayor{
    width: 280px;
    height:50px;
  }
}
@media (min-width: 1024px) {
  .btn-mayor{
    width: 300px;
    height:65px;
  }
}

</style>