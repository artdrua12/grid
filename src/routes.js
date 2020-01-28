import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './pages/Home'
import Table from './pages/Table'
import Test from './pages/Test'

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '', component: Home
        },
        {
            path: '/table', component: Table
        },
        {
            path: '/test', component: Test
        }
    ],
    mode: 'history'
})