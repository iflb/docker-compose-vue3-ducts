import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        props: {
            msg: 'Test HelloWorld Message'
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
