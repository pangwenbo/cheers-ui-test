import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "cheers-ui/lib/style/index.css";
import { testA, testB } from 'cheers-ui'
Vue.use(testA).use(testB)
Vue.config.productionTip = false

new Vue({
        router,
        store,
        render: h => h(App)
}).$mount('#app')
