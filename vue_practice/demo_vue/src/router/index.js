import { createRouter, createWebHistory } from "vue-router";
import Block from '../components/Block.vue';
import helloWorld from '../components/HelloWorld.vue';

const routes = [
    {
        path: '/',
        name: 'Block',
        component: Block

    },
    {
        path: '/about',
        name: 'helloWorld',
        component: helloWorld
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router