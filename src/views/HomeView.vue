<template>
  <div class="container-fluid">
    <div class="container mx-auto px-4">
      <div class="w-full py-8">
        <h1 style="font-size: 35px;" class="font-bold text-regalblue text-center text-xl capitalize py-4 biggest-text">Today's Free Football <span class="text-red-400">predictions</span> and tips</h1>
        <div class="w-full">
          <p class="text-center text-gray-800">
            MyBetHaven is an online service that provides free football tips and predictions for football fans, free analysis, latest results and many more across the world.
          </p>
        </div>
      </div>

      <div class="w-full py-8">
        <Suspense>
          <prediction-table />
          <template #fallback>
            <div class="w-full flex justify-center items-center">
              <AppLoading />
            </div>
          </template>
        </Suspense>
      </div>


    <div class="w-full">
      <div class="container">
        <div class="flex justify-center items-center">
          <router-link to="/history" class="font-semibold cursor-pointer text-lg">View More...</router-link>
        </div>
      </div>
    </div>

      <div class="py-8 bg-blue-400 px-4 rounded-t-xl mt-12">
        <p class=" text-gray-800 text-white">
          <span class="font-bold">Odds - </span> All oods are in european format (decimal odds). They are the ratio of the full payment to the satke, in a decimal format. Decimal odds of 2.00 are an even bet.
        </p>
        <p class="py-4 text-gray-800 text-white">
          <span class="font-bold">Types of bets - </span> All oods are in european format (decimal odds). They are the ratio of the full payment to the satke, in a decimal format. Decimal odds of 2.00 are an even bet.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, natus a? Possimus dolorum accusantium consectetur eos tempora natus architecto officia?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, amet consectetur. At minima fugiat eos sequi excepturi vitae natus harum laboriosam, dolorem illo, repudiandae mollitia eaque sunt, temporibus maiores! Laboriosam.
        </p>
        <p class="py-4 text-gray-800 text-white">
          Our goal is to Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi cupiditate nesciunt. Voluptas eum autem nulla, voluptates ut repudiandae hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, natus a? Possimus dolorum accusantium consectetur eos tempora natus architecto officia?
        </p>
        <p class="py-4 text-gray-800 text-white">
          Goodluck!
        </p>
      </div>
    </div>

    <div style="height: 400px"></div>

  </div>
</template>

<script>
import PredictionTable from '@/components/PredictionTable.vue'
import AppLoading from '@/components/AppLoading.vue'

export default {
  name: 'App',
  components: {
    PredictionTable,
    AppLoading
  }
}
</script>

<style>
@import '@/assets/tailwind.css';

@media screen and (max-width: 640px) {
  #theader {
      display: none;
  }

  .biggest-text {
    font-size: 24px !important;
  }

  .push-down {
    margin-bottom: 2rem;
  }
}
</style>
