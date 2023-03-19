<template>
    <div class="py-3 py-0">
      <div class="w-full">
        <div class="sm:hidden md:block" id="theader">
            <predictions-header />
        </div>
        <div class="sm:block md:hidden" id="hide-sm">
            <h1 class="font-bold text-lg text-regalble">Matches</h1>
        </div>
        <div v-for="prediction of predictions" :key="prediction.id" class="push-down sm:mb-8 md:mb-0">
            <prediction-row :prediction="prediction" />
        </div>

      </div>
    </div>
  </template>
  
  <script setup>
  import PredictionsHeader from '@/components/PredictionsHeader.vue'
  import PredictionRow from '@/components/PredictionRow.vue'

import { reactive } from 'vue';
 
  const predictions = reactive([
    {
        id: 1,
        date: '17/03/2023 18:30',
        fixture: "Chelsea vs Everton",
        bet: 'X',
        odd: '4.5',
        score: '2-2',
        outcome: '✔️'
    },
    {
        id: 2,
        date: '17/03/2023 18:30',
        fixture: "Brenford vs Fulham",
        bet: '1',
        odd: '1.8',
        score: '3-0',
        outcome: '✔️'
    },
    {
        id: 3,
        date: '14/03/2023 18:45',
        fixture: "Arsenal vs Sporting Lisbon",
        bet: '2',
        odd: '2.5',
        score: '1-2',
        outcome: '✔️'
    }
  ])
  </script>
  
  <style scoped>

  </style>
  