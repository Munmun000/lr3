<script setup>
import { computed, onMounted, provide, reactive, ref, watch } from "vue";
import axios from "axios";

import CardList from "./components/CardList.vue";
import IventoryVue from "./components/Iventory.vue"
import HeaderVue from "./components/Header.vue";
import DrawerVue from "./components/Drawer.vue";
import CabinetVue from "./components/Cabinet.vue";

const items = ref([])
const cart = ref([])
const iventory = ref([])


const drawerOpen = ref(false);
const iventoryOpen = ref(false);
const cabinetOpen = ref(false);

const totalPrice = computed( 
  () => cart.value.reduce((acc, item) => acc + item.price, 0)
)

const cartIsEmpty = computed(() => cart.value.length === 0)

// const cartButtonDisabled = computed(() => props.isCreatingOrder.value || cartIsEmpty.value);

const closeDrawer = () =>{
  drawerOpen.value = false
}

const openDrawer = () =>{
  drawerOpen.value = true
}

const closeIventory = () =>{
  iventoryOpen.value = false
}

const openIventory = () =>{
  iventoryOpen.value =true
}

const closeCabinet = () =>{
  cabinetOpen.value = false
}

const openCabinet = () =>{
  cabinetOpen.value =true
}

const auth = async (nameuser, passworduser) =>{
  // console.log(nameuser)
  // console.log(passworduser)
  try{
    cabinetOpen.value = false
    // получение пользователя по имени и паролю
    // добавить такой рут
    const{data} = await axios.get("http://localhost:8080/api/user/"+nameuser +"/"+ passworduser,
    {
      // nameuser: nameuser,
      // passworduser: passworduser
    })
    if(data == null){
      alert("Ошибка авторизации")
    }else{
      alert("Авторизация прошла успешно")
    }
  } catch(err){
    console.log(err)
  }finally{
    // isCreatingOrder.value = false
  }
}

const addToCart = (item) =>{
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) =>{
  cart.value.splice(cart.value.indexOf(item), 1)
    item.isAdded = false
}


const createOrder = async () =>{
  try{
    // добавить такой рут
    // const{data} = await axios.post("http://localhost:8080/api/user/orded",
    // {
    //   items:cart.value,
    //   totalprice: totalPrice.value
    // })

    iventory.value = cart.value.copyWithin();

    cart.value =[]
    return data
  } catch(err){
    console.log(err)
  }finally{
    // isCreatingOrder.value = false
  }
}

const onClickAddPlus = (item) =>{
  if(!item.isAdded){
    addToCart(item)
  }else{
    removeFromCart(item)
  }
}


onMounted(async() => {
  // процессы после рендера страницы
  try{
    // реализация для сервера-клиента
    const { data } = await axios.get("http://localhost:8080/api/product")
    console.log(data);
    items.value = data;
    console.log(items)
  } 
  catch (err){
    console.log(err)
  }
})

provide("cart", {
  cart,
  addToCart,
  createOrder,
  removeFromCart,
  closeDrawer,
  openDrawer
})

provide ("iventory",{
  iventory,
  closeIventory,
  openIventory
})

provide ("cabinet", {
  auth,
  closeCabinet,
  openCabinet
})

</script>

<template>
  <div class="bg-white w-3/5 m-auto rounded-xl shadow-xl shadow-grey-200 mt-20">
    <DrawerVue v-if="drawerOpen" 
    :total-price="totalPrice"
    @create-order="createOrder()"
    />
    <IventoryVue v-if = "iventoryOpen" />
    <CabinetVue v-if ="cabinetOpen" />


    <HeaderVue :total-price="totalPrice"  @open-drawer = "openDrawer" @open-iventory="openIventory" @open-cabinet="openCabinet"/>

    <div class="p-10">
      <div class="flex justify-between items-center mb-10">
        <h1 class="text-3xl font-bold">Товары</h1>
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
        <CardList 
        :items="items" 
        @add-to-cart="onClickAddPlus" />
      </div>

    </div>
  </div>
</template>