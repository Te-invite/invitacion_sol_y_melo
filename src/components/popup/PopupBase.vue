<script>
export default {
    name: 'BasePopup',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>

<template>
    <div class="pop-up">
        <div class="pop-up-inner">
            <div class="popup_body">
                <div class="pop-up-close" @click="close">
                <i class="fa-solid fa-xmark icon__close"></i>
            </div>
            
            <div class="pop-up-body">
                <h1 class="title">{{ title }}</h1>
                <slot></slot>
            </div>
            <div class="pop-up-footer">
                <slot name="footer"></slot>
            </div>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.pop-up{
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    height:100vh;
    width:100%;
    background:rgba(0, 0, 0, .6);
    display: grid;
    place-items: center;
}
.popup_body{
    background: var(--color-body);
    width:100%;
    height:100%;
}
.pop-up-inner{
    background-color: #fff;
    color:black;
    position:relative;
    padding:20px;
    border-radius:9px;
    width:90%;
    box-shadow: var(--shadow);
    transition:all 250ms ease-in-out;
}
.fade-enter .pop-up-inner,
.fade-leave-to .pop-up-inner {
    opacity: 0;
    transform: translateY(-32px);
}
.fade-enter-active,
.fade-leave-active{
    transition:all 250ms ease-in-out
}
.fade-leave-active{
    transition-delay:250ms;
}
.icon__close{
    position:absolute;
    height:52px;
    width:52px;
    display:flex;
    border-radius:50%;
    padding:.5rem;
    margin:.5rem;
    justify-content: center;
    align-items: center;
    top:0;
    right:0;
    font-size:1.5rem;
    cursor:pointer;
    color:var(--font-secondary);
}
.pop-up-body{
    width: 100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center ;

}

.title {
    font-family: var(--font-title-section);
    font-size: 60px;
    font-weight: 500;
    color: var(--font-primary-color);
    text-align: center;
    line-height: 110%;
    position:relative;
    margin-top:1rem;
    z-index: 2;

}
.pop-up-footer{
    width:100%;
    display: flex;
    justify-content:center;
    
}
@media(max-width:320px) {
    .pop-up-body{

        height:550px;
    }
}

@media(max-width:360px) {
    .pop-up-inner{
        width: 90%;
        height:auto;
    }
    .pop-up-body{
        height:90%;
    }
    .title{
        margin:0;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .pop-up-inner{
        width: 50%;
        height:auto;
        
    }
    .title {
        font-size:90px;
    }
    .pop-up-body{
        height:80%;
        
    }
}

@media (min-width: 1025px) {
    .pop-up-inner{
        width: 50%;
        height:auto;
    }
    .pop-up-body{
        width:100%;
        height:auto;
    
    }
    .title {
        font-size:120px;
    }
}
</style>