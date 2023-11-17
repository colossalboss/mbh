<template>
    <div class="md:flex p-0 m-0">
        <div class="md:w-2/12 sm:flex justify-between p-4 md:bg-regalblue">
            <span class="font-bold md:hidden">Time: &nbsp;</span>
            <a href="#" class="text-sm md:text-white">{{new Date( prediction.startAt).toLocaleDateString() }} {{ new Date(prediction.startAt).toLocaleTimeString()}}</a>
        </div>
        <div class="md:w-5/12  sm:flex justify-between border p-4">
            <span class="font-bold md:hidden">Fixture: &nbsp;</span>
            <a href="#" class="text-sm">{{ prediction.homeTeamName }} vs {{ prediction.awayTeamName }}</a>
        </div>
        <div class="md:w-2/12  sm:flex justify-between border p-4 md:block text-center">
            <span class="font-bold md:hidden">Bet: &nbsp;</span>
            <a href="#" class="text-sm text-center"><span>{{ prediction.betCategory }}</span><br><span>{{ prediction.bet }}</span></a>
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
            <a href="#" class="text-sm text-center capitalize font-semibold" :class="[outcomeColor(prediction.outcome.toLowerCase()) ]">{{ capitalize(prediction.outcome) }}</a>
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

const outcomeMapper = {
    "win": "win",
    "lose": "lose",
    "pending": "pending",
    "void": "void",
}

const outcomeColor = (outcome) => {
    const color = outcomeMapper[outcome];
    return color ? color : '';
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
</script>
  
<style scoped>
    .pending {
        color: #fdba74;
        
    }

    .win {
        color: #22c55e;

    }

    .lose {
        color: #dc2626;

    }

    .void {
        color: #a21caf;

    }
</style>
  