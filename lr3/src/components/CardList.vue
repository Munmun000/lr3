<script setup>
import CardVue from "./Card.vue";

defineProps({
  items: Array
})

// const onClickAdd = () =>{
//     alert("Добавить");
// }
const emit = defineEmits(["addToCart"])

</script>

<template>
    <div class="grid grid-cols-4 gap-10">
        <CardVue
          v-for="item in items"
          :key="item.id"
          :title="item.nameproduct"
          :description = "item.descriptionproduct"
          :price="item.price"
          :img="item.imgpath"
          :on-click-add="() => emit('addToCart', item)"
          :is-added="item.isAdded"
          />
      </div>
</template>