<template>
    <div class="py-4 bg-regalblue">
        <header>
            <nav class="border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg width="49" height="15" viewBox="0 0 49 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.56 15V13.94H1.4C1.58667 13.94 1.75333 13.9133 1.9 13.86C2.06 13.8067 2.18667 13.6933 2.28 13.52C2.37333 13.3467 2.42 13.0867 2.42 12.74V3C2.42 2.64 2.37333 2.37333 2.28 2.2C2.18667 2.02667 2.06 1.91333 1.9 1.86C1.75333 1.80667 1.58667 1.78 1.4 1.78H0.56V0.719999H6.32L9.64 10.38L12.82 0.719999H18.48V1.78H17.64C17.4533 1.78 17.28 1.81333 17.12 1.88C16.96 1.93333 16.8333 2.05333 16.74 2.24C16.66 2.41333 16.62 2.69333 16.62 3.08V12.64C16.62 13.0133 16.66 13.2933 16.74 13.48C16.8333 13.6667 16.96 13.7933 17.12 13.86C17.28 13.9133 17.4533 13.94 17.64 13.94H18.48V15H12.08V13.94H12.28C12.56 13.94 12.7933 13.9133 12.98 13.86C13.1667 13.8067 13.3067 13.7 13.4 13.54C13.4933 13.38 13.54 13.14 13.54 12.82V2.7L9.5 15H8.14L3.92 2.7V12.64C3.92 13.0133 3.97333 13.2933 4.08 13.48C4.2 13.6667 4.37333 13.7933 4.6 13.86C4.82667 13.9133 5.09333 13.94 5.4 13.94H5.52V15H0.56ZM19.603 15V13.94H20.423C20.623 13.94 20.7963 13.9133 20.943 13.86C21.103 13.7933 21.2296 13.6667 21.323 13.48C21.4163 13.2933 21.463 13.0133 21.463 12.64V3.06C21.463 2.7 21.4163 2.43333 21.323 2.26C21.2296 2.07333 21.103 1.94667 20.943 1.88C20.783 1.81333 20.6096 1.78 20.423 1.78H19.603V0.719999H25.443C27.3496 0.719999 28.7763 1.01333 29.723 1.6C30.683 2.18667 31.163 3.10667 31.163 4.36C31.163 4.94667 31.0563 5.44 30.843 5.84C30.6296 6.22667 30.3363 6.54667 29.963 6.8C29.5896 7.04 29.1496 7.24 28.643 7.4V7.5C29.2563 7.64667 29.7963 7.88 30.263 8.2C30.7296 8.52 31.0963 8.92 31.363 9.4C31.6296 9.86667 31.763 10.4267 31.763 11.08C31.763 12.3867 31.283 13.3667 30.323 14.02C29.363 14.6733 27.9363 15 26.043 15H19.603ZM25.943 13.78C26.8363 13.78 27.4696 13.5733 27.843 13.16C28.2163 12.7467 28.403 12.0333 28.403 11.02C28.403 10.3667 28.3296 9.82667 28.183 9.4C28.0363 8.97333 27.783 8.66 27.423 8.46C27.0763 8.24667 26.5963 8.14 25.983 8.14H24.623V13.78H25.943ZM25.383 6.92C26.0096 6.92 26.4963 6.83333 26.843 6.66C27.1896 6.48667 27.4363 6.21333 27.583 5.84C27.7296 5.45333 27.803 4.96 27.803 4.36C27.803 3.45333 27.6163 2.82667 27.243 2.48C26.883 2.12 26.2496 1.94 25.343 1.94H24.623V6.92H25.383ZM33.0405 15V13.94H33.8805C34.0671 13.94 34.2338 13.9133 34.3805 13.86C34.5405 13.7933 34.6671 13.6667 34.7605 13.48C34.8538 13.2933 34.9005 13.0133 34.9005 12.64V3C34.9005 2.64 34.8538 2.37333 34.7605 2.2C34.6671 2.02667 34.5405 1.91333 34.3805 1.86C34.2338 1.80667 34.0671 1.78 33.8805 1.78H33.0405V0.719999H39.9405V1.78H39.0805C38.8938 1.78 38.7205 1.81333 38.5605 1.88C38.4138 1.93333 38.2938 2.05333 38.2005 2.24C38.1071 2.41333 38.0605 2.69333 38.0605 3.08V6.94H43.2805V3.08C43.2805 2.69333 43.2338 2.41333 43.1405 2.24C43.0471 2.05333 42.9205 1.93333 42.7605 1.88C42.6138 1.81333 42.4471 1.78 42.2605 1.78H41.4005V0.719999H48.3005V1.78H47.4605C47.2738 1.78 47.1005 1.81333 46.9405 1.88C46.7938 1.93333 46.6738 2.05333 46.5805 2.24C46.4871 2.41333 46.4405 2.69333 46.4405 3.08V12.74C46.4405 13.0867 46.4871 13.3467 46.5805 13.52C46.6738 13.6933 46.8005 13.8067 46.9605 13.86C47.1205 13.9133 47.2871 13.94 47.4605 13.94H48.3005V15H41.4005V13.94H42.2605C42.4471 13.94 42.6138 13.9133 42.7605 13.86C42.9205 13.7933 43.0471 13.6667 43.1405 13.48C43.2338 13.2933 43.2805 13.0133 43.2805 12.64V8.16H38.0605V12.64C38.0605 13.0133 38.1071 13.2933 38.2005 13.48C38.2938 13.6667 38.4138 13.7933 38.5605 13.86C38.7205 13.9133 38.8938 13.94 39.0805 13.94H39.9405V15H33.0405Z"
                                fill="white" />
                        </svg>
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">MyBetHaven</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false" @click="showLinks = !showLinks">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="w-full md:block md:w-auto" id="navbar-default" :class="{ 'hidden': !showLinks }">
                        <ul
                            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-regalblue dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <router-link to="/" @click="showLinks = !showLinks"
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:text-white">Home</router-link>
                            </li>

                            <li>
                                <router-link to="/history" @click="showLinks = !showLinks"
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:text-white">History</router-link>
                            </li>

                            <li>
                                <router-link to="/news" @click="showLinks = !showLinks"
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:text-white">News</router-link>
                            </li>

                            <li>
                                <router-link to="/about" @click="showLinks = !showLinks"
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:text-white">About</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    </div>
</template>
  
<script>

export default {

    data() {
        return {
            showLinks: false
        }
    }

}
</script>
  
<style scoped></style>
  