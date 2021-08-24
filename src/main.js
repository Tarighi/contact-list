import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import store from './_store'
import router from './router';

const app = createApp(App)

app.use(store)
app.use(router)
// app.config.productionTip = false
app.mount('#app')

// new Vue({
//     render: h => h(App),
//     store: store,
//     router
// }).$mount('#app')
