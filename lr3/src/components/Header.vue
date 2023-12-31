<script setup>
defineProps({
  totalPrice: Number
})
const emit = defineEmits(["openDrawer", "openIventory", "openCabinet"])
// const { pageIventory } = inject("iventory");
// const emit = defineEmits(["pageIventory"])

</script>

<template>
    <header class="flex justify-between border-b border-slate-200 px-10 py-8">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" class="w-11" />
        <div>
          <h2 class="font-bold text-xl uppercase">Magazin</h2>
          <p class="text-slate-400">Магазин</p>
        </div>
      </div>
  
      <ul class="flex items-center gap-10">
        <li 
          @click="() => emit('openDrawer')"
          class="flex items-center gap-3 cursor-pointer">
          <img src="/cart.svg" alt="Cart" />
          <b>{{ totalPrice }}</b>
        </li>
        <li class="flex items-center gap-3 cursor-pointer"
          @click="() => emit('openIventory')">
          <!-- <img src="/heart.svg" alt="Favorite" /> -->
          <span>История</span>
        </li>
        <li class="flex items-center gap-3 cursor-pointer"
          @click="() => emit('openCabinet')">
          <img src="/profile.svg" alt="Favorite" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
</template>