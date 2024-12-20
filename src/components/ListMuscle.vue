<template>
    <ul class="flex flex-col gap-4">
        <router-link v-for="(option, idx) in options":to="{ name: 'ListExercices', params: { name: option }}" class="w-full">

            <li class="w-full h-24 bg-white rounded-xl flex items-center gap-10 p-4 justify-between px-4"   >
                <div class="flex items-center gap-4">
                    <img class="w-20 rounded-full" :src="getImage(option)" alt="">
                    <h3 class="text-xl font-bold capitalize">{{ option }}</h3>
                </div>
                <div>
                    <v-icon name="md-keyboardarrowright" class="" />
                </div>
            </li>
        </router-link>
    </ul>

</template>

<script lang="ts">
import { getImage } from '@/functions/function';
    export default {
        name: 'ListMuscle',
        props: {
            options: {
                type: Array<string>,
                required: true
            }
        },
        data() {
            return {
                getImage: getImage
            }
        },
       methods: {
         
       }
    }
</script>