import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routeurs'
import { OhVueIcon, addIcons } from 'oh-vue-icons'

import { MdCategory, GiMuscleUp, MdKeyboardarrowright} from 'oh-vue-icons/icons'

addIcons(MdCategory, GiMuscleUp, MdKeyboardarrowright)

createApp(App).use(router).component('v-icon', OhVueIcon).mount('#app')
