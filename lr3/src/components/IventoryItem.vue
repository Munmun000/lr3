<script setup>

// const emit = defineEmits(["onClickRemove"])

defineProps({
  id: Number,
  img: String,
  title: String,
  description:String,
  price: Number,
  onClickDelete: Function,
});
</script>

<template>
  <div class="flex item-center border border-slate-200 rounded-xl p-4 gap-4">
    <img :src="img" class="w-16 h-16" alt="" />
    <div class="flex flex-1 flex-col w-full">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-5">
        <span class="flex-1 font-bold">{{ price }} руб.</span>
      </div>
    </div>
  </div>
</template>