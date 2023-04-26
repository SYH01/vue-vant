import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'//很重要的全局引入

import { Button, Tabbar, TabbarItem, Icon, Form, Field, CellGroup , showToast } from 'vant'

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);


app.use(store)
app.use(router)
app.mount('#app')

app.use(Button)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Icon)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(showToast)