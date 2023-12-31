<script setup>
import axios from "axios";
import {computed, inject, onMounted, provide, reactive, ref, watch } from "vue";
import CardList from "../components/CardList.vue";

const {addToCart, removeFromCart} = inject("cart")
const items = ref([])

// const {addToCart, removeFromCart} = inject("cart")

// const addToCart = (item) =>{
//   cart.value.push(item)
//   item.isAdded = true
// }

// const removeFromCart = (item) =>{
//   cart.value.splice(cart.value.indexOf(item), 1)
//     item.isAdded = false
// }

// const onClickAddPlus = (item) =>{
//   if(!item.isAdded){
//     addToCart(item)
//   }else{
//     removeFromCart(item)
//   }
// }

const cartIsEmpty = computed(() => cart.value.length === 0)

</script>


<template>
    <div >
        <div class="flex justify-between items-center mb-10">
        <h1 class="text-3xl font-bold">Все кроссовки</h1>
        <div class="flex items-center gap-4">
          <!-- <select class="py-2 px-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none">
            <option value="name">По названию</option>
            <option value="price">По цене (дешевые)</option>
            <option value="price">По цене (дорогие)</option>
          </select> -->
          <div class="relative">
            <!-- <input
              @input="onChangeSearchInput"
              type="text"
              class="border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-gray-400"
              placeholder="Поиск..."
            /> -->
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src="/search.svg" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <CardList :items="items" @add-to-cart="onClickAddPlus" />
      </div>
    </div>
</template>