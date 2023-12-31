<script setup>
import { inject } from 'vue';
import CartItem from './CartItem.vue';

const {cart, removeFromCart} = inject("cart") ;

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
        <CartItem v-for="item in cart" 
        :key="item.id" 
        :title="item.nameproduct" 
        :price="item.price" 
        :img="item.imgpath" 
        :description="item.descriptionproduct"
        @on-click-remove="() => removeFromCart(item)"
      />
    </div>
</template>