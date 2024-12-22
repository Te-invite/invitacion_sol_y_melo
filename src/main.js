import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes'
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
AOS.init({
    duration: 1200,  // Opcional: duración de la animación
  });