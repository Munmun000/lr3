<script setup>
import IventoryHeadVue from './IventoryHead.vue';
import { inject } from 'vue';
import IventoryItemList from './IventoryItemList.vue';
const {createOrder} = inject("cart"); 

</script>
<template>
    <div>
        <div class="fixed z-10 top-0  left-0 h-full w-full bg-black opacity-70"></div>
        <!-- <div class="fixed z-10 top-0 h-full w-full bg-black opacity-70" > </div> -->
        <div class="flex flex-col justify-between fixed h-full z-10 top-0 h-full right-0 w-96 bg-white px-10 py-7" >
         <IventoryHeadVue />
         <IventoryItemListItemListVue />
         </div>
    </div>
</template>