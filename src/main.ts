import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import About from './views/About.vue'

let app = createApp(App)


let routes = [
    {path:"/about",component:About}
]

let router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

app.use(router)
app.mount('#app')
