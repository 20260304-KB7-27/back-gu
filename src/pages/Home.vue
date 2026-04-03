<template>
  <div class="bg-[#f4f2ee] min-h-screen flex items-center justify-center p-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <Card v-for="user in users"><UserCard :user="user" /></Card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
// import { today, getLocalTimeZone } from '@internationalized/date';
import Card from '@/components/Card.vue';
import UserCard from '@/components/UserCard.vue';

const users = ref([]);

const getMembers = async () => {
    const response = await axios.get("http://10.10.0.81:3000/members");
    if (response.status === 200) {
        users.value = response.data;
    }
}   

onMounted(() => {
    getMembers();
})

</script>

<style scoped>



</style>