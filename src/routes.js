import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './pages/Home'
import Table from './pages/Table'

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '', component: Home
        },
        {
            path: '/table', component: Table
        }
    ],
    mode: 'history'
})