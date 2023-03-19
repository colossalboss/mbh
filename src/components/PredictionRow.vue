<template>
    <div class="md:flex p-0 m-0">
        <div class="md:w-2/12 sm:flex justify-between p-4 md:bg-regalblue">
            <span class="font-bold md:hidden">Time: &nbsp;</span>
            <a href="#" class="text-sm md:text-white">{{ prediction.date }}</a>
        </div>
        <div class="md:w-6/12  sm:flex justify-between border p-4">
            <span class="font-bold md:hidden">Fixture: &nbsp;</span>
            <a href="#" class="text-sm">{{ prediction.fixture }}</a>
        </div>
        <div class="md:w-1/12  sm:flex justify-between border p-4 md:block text-center">
            <span class="font-bold md:hidden">Bet: &nbsp;</span>
            <a href="#" class="text-sm text-center">{{ prediction.bet }}</a>
        </div>
        <div class="md:w-1/12  sm:flex justify-between border p-4 md:block text-center ">
            <span class="font-bold md:hidden">Odd: &nbsp;</span>
            <a href="#" class="text-sm text-center">{{ prediction.odd }}</a>
        </div>
        <div class="md:w-1/12  sm:flex justify-between border p-4 md:block text-center ">
            <span class="font-bold md:hidden">Score: &nbsp;</span>
            <a href="#" class="text-sm text-center">{{ prediction.score }}</a>
        </div>
        <div class="md:w-1/12  sm:flex justify-between p-4 md:block text-center  md:bg-gray-300">
            <span class="font-bold md:hidden">Outcome: &nbsp;</span>
            <a href="#" class="text-sm text-center">{{ prediction.outcome }}</a>
        </div>
    </div>
</template>
  
<script setup>
import { defineProps } from 'vue'
defineProps({
    prediction: {
        required: true,
        type: Object
    }
})
</script>
  
<style scoped></style>
  