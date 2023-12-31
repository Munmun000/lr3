<script setup>
// import CartItem from './CartItem.vue';
import CabinetHeadVue from './CabinetHead.vue';
import { compile } from 'vue';
import { inject } from 'vue';

defineProps({
    totalPrice: Number,
    // isCreatingOrder: Number
    // cartButtonDisabled: Boolean 
})

// const username = ref([])
// const password = ref([])
const {auth} = inject("cabinet"); 
</script>

<template>
    <div>
        <div class="fixed z-10 top-0  left-0 h-full w-full bg-black opacity-70"></div>
        <div class="flex flex-col justify-between fixed h-full z-10 top-0 h-full right-0 w-96 bg-white px-10 py-7" >
         <CabinetHeadVue />

         <div>
            <div class="flex justify-top items-center h-screen">
                <div class="p-8  rounded-lg ">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Имя пользователя:
                    </label>
                    <input
                    class="w-full border rounded-md p-2"
                    type="text"
                    id="username"
                    v-model="nameuser"
                    placeholder="Введите ваше имя пользователя"
                    />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Пароль:
                    </label>
                    <input
                    class="w-full border rounded-md p-2"
                    type="password"
                    id="password"
                    v-model="passworduser"
                    placeholder="Введите ваш пароль"
                    />
                </div>
                <button
                    @click="auth(nameuser, passworduser)"
                    :disabled= "false"
                    class="flex justify-center items-center disabled:bg-slate-300 gap-3 w-full py-3 mt-10 bg-lime-500 text-white rounded-xl transition active:bg-lime-700 hover:bg-lime-600">
                    Войти
                    <img src="/arrow-next.svg" alt="Arrow" />
                </button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>