<template>
    <div class="w-full bg-transparent overflow-hidden h-screen">
        <navBar/>
        <ul class="w-min h-full flex flex-col gap-4 m-auto mt-3 overflow-hidden overflow-y-auto"  >
            <li v-for="(item, idx) in ListExercices" :key="idx" class="w-full h-20 bg-white rounded-xl flex items-center gap-10 p-4 justify-between "   >
               <div>
                   <h3 class="text-lg font-bold capitalize">{{ item.name }}</h3>
                   <span class="text-sm bg-slate-300/30 px-2 rounded-2xl font-semibold">
                    <v-icon name="gi-muscle-up" />
                    {{ item.muscle }}</span>
                   <span class="text-sm bg-slate-300/30 px-2 rounded-2xl font-semibold ml-3">Type: {{ item.type }}</span>
               </div>
               <div>
                <span class="text-sm font-bold text-white px-2 py-1 rounded-full" :style="{'backgroundColor': getColor(item.difficulty)}"
                >{{ item.difficulty }}</span>
               </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import {getMuscleExercices} from '../services/ApiWorkout';
import { type ExercieseInterface } from '../Interfaces/Interface.ts';
import { getColor } from '@/functions/function';
import navBar from './navBar.vue';
export default {
    name: 'ListExercices',
    components: {
        navBar
    },
    data() {
        return {
            exercicesName: this.$route.params.name as string,
            ListExercices: [] as ExercieseInterface[],
            getColor: getColor
        }
    },
    mounted() {
        this.getListExcercices(this.exercicesName);
    },


    methods: {
           async getListExcercices(muscle: string) {
                try {
                    const response = await getMuscleExercices(muscle);
                    console.log(response);
                    this.ListExercices = response
                } catch (error) {
                    console.error('Erreur lors de la récupération des exercices :', error);
                }

    }
}
}
</script>