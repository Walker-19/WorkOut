<template>
    <div class="w-full h-screen bg-transparent flex flex-col gap-4">
        <navBar />
        <div class="w-min h-full p-4">
            <div class="w-full flex px-20 mt-10">
                 <div class="w-1/2 flex justify-start flex-col">
                    <h1 class="text-2xl font-bold">{{ name }}</h1>
                    <p class="font-light"><v-icon name="gi-muscle-up" />: {{ muscle }}</p>
                 </div>
                 <div class="w-1/2 flex justify-end">
                    <span class="text-md h-max font-bold bg-slate-400/30 text-center text-white px-2 py-1 rounded-full" >
                       type: {{ type }}
                    </span>
                   <span class="text-white h-max bg-green-600 text-center rounded-full px-2 py-1 ml-3 font-semibold"> 
                    equipment: {{ equipment }}
                   </span>
                 </div>
            </div>
           
           <div class="mt-10 flex flex-col gap-10 px-20">
               <p class="bg-slate-400/40 w-max h-max rounded-full px-2 text-white font-semibold">Niveau: {{ level }}</p>
               <p class="font-semibold">  {{ instructions }}</p>
           </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import navBar from './navBar.vue';

export default defineComponent({
    name: 'SingleExercices',
    components: {
        navBar
    },
    data() {
        return {
            name: this.$route.params.name as string,
            type: this.$route.params.type as string,
            instructions: this.$route.params.instructions as string,
            equipment: this.$route.params.equipment as string,
            muscle: this.$route.params.muscle as string,
            level: this.$route.params.level as string
        }

        
       
    },
    mounted() {
            console.log(this.$route.params.instructions, '-> SingleExercices');
        }  
});
</script>