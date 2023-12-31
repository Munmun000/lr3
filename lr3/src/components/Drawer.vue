<script setup>
// import CartItem from './CartItem.vue';
import DrawerHeadVue from './DrawerHead.vue';
import CartItemListVue from './CartItemList.vue';
import { inject } from 'vue';
import { compile } from 'vue';

defineProps({
    totalPrice: Number,
    // isCreatingOrder: Number
    // cartButtonDisabled: Boolean 
})

const {createOrder} = inject("cart"); 

</script>
<template>
    <div>
        <div class="fixed z-10 top-0  left-0 h-full w-full bg-black opacity-70"></div>
        <!-- <div class="fixed z-10 top-0 h-full w-full bg-black opacity-70" > </div> -->
        <div class="flex flex-col justify-between fixed h-full z-10 top-0 h-full right-0 w-96 bg-white px-10 py-7" >
         <DrawerHeadVue />
         <CartItemListVue />

         <div>
                <div class="flex flex-col gap-5">
                    <div class="flex items-end gap-2">
                        <span>Итого:</span>
                        <div class="flex-1 border-b border-dashed" />
                        <span class="font-bold">
                        <b>{{ totalPrice }}</b> руб.</span>
                    </div>
                </div>

                <!-- :disabled="cartButtonDisabled" -->

                <button
                    @click="createOrder()"
                    :disabled="totalPrice ? false : true"
                    class="flex justify-center items-center disabled:bg-slate-300 gap-3 w-full py-3 mt-10 bg-lime-500 text-white rounded-xl transition active:bg-lime-700 hover:bg-lime-600">
                    Оформить заказ
                    <img src="/arrow-next.svg" alt="Arrow" />
                </button>
            </div>
        </div>
    </div>
</template>