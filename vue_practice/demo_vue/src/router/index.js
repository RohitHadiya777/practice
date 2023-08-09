import { createRouter, createWebHistory } from "vue-router";
import Block from '../components/Block.vue';
import HelloWorld from '../components/HelloWorld.vue';
import SignupForm from '../components/SignupForm.vue';

const routes = [
    {
        path: '/',
        name: 'Block',
        component: Block

    },
    {
        path: '/about',
        name: 'helloWorld',
        component: HelloWorld
    },
    {
        path: '/signup',
        name: 'SignupForm',
        component: SignupForm
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router