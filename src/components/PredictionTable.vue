<template>
  <div class="py-3 py-0">
    <div class="w-full" v-if="!isHistoryPage">
      <div class="w-full py-4">
        <a @click="refreshTips(1)" class="font-semibold text-lg text-regalblue cursor-pointer">Today's
          Predictions</a>
      </div>
      <div class="sm:hidden md:block" id="theader">
        <predictions-header />
      </div>
      <div class="sm:block md:hidden" id="hide-sm">
        <h1 class="font-bold text-lg text-regalble">Matches</h1>
      </div>

      <div v-if="filteredTips && filteredTips.length > 0">
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

    <div class="w-full" v-if="!isHistoryPage">
      <div class="w-full my-8">
        <div class="container">
          <hr>
        </div>
      </div>

      <div class="w-full">
        <div class="container">
          <h2 class="text-lg font-semibold">Older Predictions</h2>
        </div>
      </div>
    </div>

    <div class="w-full my-8" v-for="(tip) of oldTips" :key="tip">
      <div class="w-full py-4 flex items-left">
        <a @click="refreshTips(1)" class="font-semibold text-lg text-regalblue cursor-pointer">{{ (`${new
          Date(tip[0].startAt)}`).substring(0, 15) }}</a>
      </div>
      <div class="sm:hidden md:block" id="theader">
        <predictions-header />
      </div>
      <div class="sm:block md:hidden" id="hide-sm">
        <h1 class="font-bold text-lg text-regalble">Matches</h1>{{ tip }}
      </div>

      <div>
        <div v-for="prediction of tip" :key="prediction.id" class="push-down sm:mb-8 md:mb-0">
          <prediction-row :prediction="prediction" />
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
import { useRoute } from 'vue-router'

const route = useRoute();

const isHistoryPage = route.path === "/history";

let predictions = ref([]);
let oldDates = ref([]);
let oldTips = ref({});

const today = ref(new Date());
const isToday = ref(true)

const groupByDate = (tips) => {
  const groupedTips = {};
  for (let tip of tips) {
    const tipDate = new Date(tip.startAt).getDate();
    const tipMonth = new Date(tip.startAt).getMonth();
    const tipYear = new Date(tip.startAt).getFullYear();
    const date = `${tipDate}-${tipMonth}-${tipYear}`;

    if (!groupedTips[date]) {
      groupedTips[date] = tips.filter(i => (new Date(i.startAt).getDate() == tipDate) && (new Date(i.startAt).getMonth() == tipMonth) && (new Date(i.startAt).getFullYear() == tipYear));
    }
  }

  oldTips.value = groupedTips;
  oldDates.value = Object.keys(groupedTips);
}

const getTips = async (db) => {
  const tipsCol = collection(db, 'tip');
  const tipsSnapshot = await getDocs(tipsCol);
  let tips = tipsSnapshot.docs.map(doc => doc.data());
  tips = tips.sort((a, b) => (new Date(a.startAt)) > (new Date(b.startAt)) ? 1 : -1)

  predictions.value = tips.filter(tip => {
    const objDate = new Date(tip.startAt);
    return objDate.getDate() === today.value.getDate() &&
      objDate.getMonth() === today.value.getMonth() &&
      objDate.getFullYear() === today.value.getFullYear();
  });

  const predictionIds = predictions.value.map(i => i.fixtureId);

  groupByDate(tips.filter(i => !predictionIds.includes(i.fixtureId)));
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
  