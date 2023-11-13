<template>
    <div class="container-fluid">
      <div class="container mx-auto px-4">
        <div class="w-full mt-8">
          <h1 style="font-size: 35px;" class="font-bold text-regalblue text-center text-xl capitalize py-4 biggest-text">Recent Free Football <span class="text-red-400">predictions</span> and tips</h1>
          <div class="w-full">
            <p class="text-center text-gray-800">
              MyBetHaven is an online service that provides free football tips and predictions for football fans, free analysis, latest results and many more across the world.
            </p>
          </div>
        </div>
  
        <div class="w-full pb-8">
          <Suspense>
            <prediction-table :isHistory="true" />
            <template #fallback>
              <div class="w-full flex justify-center items-center">
                <AppLoading />
              </div>
            </template>
          </Suspense>
        </div>
  
  
      <div class="w-full pb-8">
        <div class="container">
          <div class="flex justify-center items-center">
            <router-link to="/history" class="font-semibold cursor-pointer text-lg">View More...</router-link>
          </div>
        </div>
      </div>
      </div>
  
  
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
  