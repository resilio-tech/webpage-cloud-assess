import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

library.add(
	faBars, faX
)

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(router)
	.mount('#app')
