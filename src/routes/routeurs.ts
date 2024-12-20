import ListExercices from "../components/ListExercices.vue"    ;
import { createRouter, createWebHistory, type RouteLocationNormalized } from "vue-router";
import Home from "@/components/Home.vue";
import SingleExercices from "@/components/SingleExercices.vue";

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
    },
    {
        path: '/single_exercice/:name&:type&:instructions:equipment&:muscle&:level',
        name: 'SingleExercice',
        component: SingleExercices,
        props: (route: RouteLocationNormalized) => ({
            name: route.params.name,
            type: route.params.type,
            equipment: route.params.equipment,
            instructions: route.params.instructions,
            muscle: route.params.muscle,
            level: route.params.level
        })
    }
]
const router = createRouter({ 
    history: createWebHistory(),
    routes
});

export default router;