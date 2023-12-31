<script setup>
import { inject } from 'vue';
import IventoryItem from './IventoryItem.vue';

const {iventory} = inject("iventory") ;

defineProps({
  img: String,
  title: String,
  price: Number,
  description: String,
  onClickDelete: Function,
});
</script>

<template>
    <div class="flex flex-col gap-4">

        <IventoryItem v-for="item in iventory" 
        :key="item.id" 
        :title="item.nameproduct" 
        :price="item.price" 
        :img="item.imgpath" 
        :description="item.descriptionproduct"
      />
    </div>
</template>