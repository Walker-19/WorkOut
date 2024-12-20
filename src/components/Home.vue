<template>
    
     <navBar/>

      <div class="w-min h-full overflow-hidden overflow-y-auto mt-2 p-10">
        <ListMuscle :options="muscles"/>
      </div>
  
</template>

<script lang="ts">
import ListMuscle from './ListMuscle.vue'
import { getMuscleGroups } from '../services/ApiWorkout';
import navBar from './navBar.vue';

export default {
    name: 'Home',
    components: {
        ListMuscle,
        navBar
    },
    data() {
        return {
        muscles: []
        }
    },
    
    mounted() {
        this.fetchMuscles();
    },
    
    methods: {
        async fetchMuscles() {
        try {
            const response = await getMuscleGroups();
            this.muscles = response!.data
            console.log(this.muscles);
        } catch (error) {
            console.error('Erreur lors de la récupération des muscles :', error);
        }
        }
    },
}
</script>