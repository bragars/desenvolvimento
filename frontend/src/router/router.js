import { createWebHistory, createRouter } from 'vue-router';
import UserPage from '@/components/UserPage.vue'
import Dashboard from '@/components/Dashboard.vue'

const history = createWebHistory();
const router = createRouter({
    history, 
    routes: [
        {
            path: '/',
            name: 'UserPage',
            component: UserPage
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        }
    ]
})

export default router;