<template>
  <div class="py-3 py-0">
    <div class="w-full">
      <div class="w-full py-4">
        <a @click="refreshTips(-1)" class="font-semibold text-lg text-regalblue cursor-pointer" v-if="isToday">Yesterday Predictions</a>
        <a @click="refreshTips(1)" class="font-semibold text-lg text-regalblue cursor-pointer" v-else>Today's Predictions</a>
      </div>
      <div class="sm:hidden md:block" id="theader">
        <predictions-header />
      </div>
      <div class="sm:block md:hidden" id="hide-sm">
        <h1 class="font-bold text-lg text-regalble">Matches</h1>
      </div>

      <div v-if="filteredTips && filteredTips.length > 0" >
        <div v-for="prediction of filteredTips" :key="prediction.id" class="push-down sm:mb-8 md:mb-0">
        <prediction-row :prediction="prediction" />
      </div>
      </div>
      <div v-else>
        <div class="w-full">
          <p class="font-semibold text-sm text-center py-8">No records found</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import PredictionsHeader from '@/components/PredictionsHeader.vue'
import PredictionRow from '@/components/PredictionRow.vue'
import { db, collection, getDocs } from '@/firebase/init'

import { computed, ref } from 'vue';

let predictions = ref([]);

const today = ref(new Date());
const isToday = ref(true)

const getTips = async (db) => {
  const tipsCol = collection(db, 'tip');
  const tipsSnapshot = await getDocs(tipsCol);
  const tips = tipsSnapshot.docs.map(doc => doc.data());

  predictions.value = tips.filter(tip => {
    const objDate = new Date(tip.startAt);
    return objDate.getDate() === today.value.getDate() &&
      objDate.getMonth() === today.value.getMonth() &&
      objDate.getFullYear() === today.value.getFullYear();
  });
}

const refreshTips = async (number) => {
  if (number < 0) {
    today.value.setDate(today.value.getDate() - 1);
  } else {
    today.value = new Date();
  }
  await getTips(db);
  isToday.value = !isToday.value;

}

const filteredTips = computed(() => {
  if (!predictions.value || predictions.value.length === 0) return []
  return predictions.value;
})

await getTips(db);

  // const predictions = reactive([
  //   {
  //       id: 1,
  //       date: '17/03/2023 18:30',
  //       fixture: "Chelsea vs Everton",
  //       bet: 'X',
  //       odd: '4.5',
  //       score: '2-2',
  //       outcome: '✔️'
  //   },
  //   {
  //       id: 2,
  //       date: '17/03/2023 18:30',
  //       fixture: "Brenford vs Fulham",
  //       bet: '1',
  //       odd: '1.8',
  //       score: '3-0',
  //       outcome: '✔️'
  //   },
  //   {
  //       id: 3,
  //       date: '14/03/2023 18:45',
  //       fixture: "Arsenal vs Sporting Lisbon",
  //       bet: '2',
  //       odd: '2.5',
  //       score: '1-2',
  //       outcome: '✔️'
  //   }
  // ])
</script>
  
<style scoped></style>
  