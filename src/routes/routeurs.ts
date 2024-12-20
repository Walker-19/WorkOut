import ListExercices from "../components/ListExercices.vue"    ;
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/list_exercices/:name',
        name: 'ListExercices',
        component: ListExercices
    }
]
const router = createRouter({ 
    history: createWebHistory(),
    routes
});

export default router;