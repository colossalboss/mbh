<template>
    <div class="w-full pb-8">
        <section>
            <!-- Container for demo purpose -->
            <div class="container my-8 mx-auto md:px-6">
                <!-- Section: Design Block -->
                <section class="mb-32 text-center md:text-left">
                    <h2 class="mb-12 text-3xl font-bold">Latest articles</h2>

                    <a :href="article.link" target="_blank" class="mb-6 md:my-8 my-4 flex flex-wrap main-box"
                        v-for="(article, index) of articles" :key="index">
                        <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-12/12">
                            <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                data-te-ripple-init data-te-ripple-color="light">
                                <img :src="article.image" class="w-full" :alt="article.title" />
                                <a href="#!">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                            <h5 class="mb-3 text-lg font-bold">{{ article.title }}</h5>
                            <div
                                class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="mr-2 h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                </svg>
                                {{ article.sourceName }} <small>&nbsp;<u>{{ new Date(article.publishedAt) }}</u></small>
                            </div>
                            <p class="text-neutral-500 dark:text-neutral-300" :innerHTML="article.content">

                            </p>
                        </div>
                    </a>
                </section>
            </div>
            <!-- Container for demo purpose -->
        </section>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

// const getFirstDayOfMonth = () => {
//     // Get the current date
//     const currentDate = new Date();

//     // Set the date to the first day of the month
//     currentDate.setDate(1);
//     return currentDate;
// }

const articles = ref([]);

const getNews = async () => {
    const options = {
        method: 'GET',
        url: 'https://newsi-api.p.rapidapi.com/api/category',
        params: {
            category: 'sport',
            language: 'en',
            country: 'gb',
            sort: 'top',
            page: '1',
            limit: '100'
        },
        headers: {
            'X-RapidAPI-Key': 'XXXXXXXXXX',
            'X-RapidAPI-Host': 'newsi-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data, "NEWS");
        articles.value = response.data;
    } catch (error) {
        console.error(error);
    }
}

getNews();
</script>

<style>
    .main-box {
        padding: 8px;
        box-shadow: 1px 2px 1px 2px #dcd6d6;
        border-radius: 8px;
    }
</style>