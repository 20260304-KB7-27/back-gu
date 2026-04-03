<template>
<<<<<<< HEAD
    <div
        class="bg-[#f4f2ee] min-h-screen flex items-center justify-center p-10"
    >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card v-for="user in members"><UserCard :user="user" /></Card>
        </div>
=======
  <div class="bg-[#f4f2ee] min-h-screen flex items-center justify-center p-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <Card v-for="user in users">
        <UserCard :user="user" />
      </Card>
>>>>>>> origin/main
    </div>
</template>

<script setup>
import { onMounted, computed, provide } from 'vue';
import Card from '@/components/Card.vue';
import UserCard from '@/components/UserCard.vue';
<<<<<<< HEAD
import { useMember } from '@/api/Member';
const { members, fetchAllMembers } = useMember();

onMounted(() => {
    fetchAllMembers();
});

// provide(
//     'memberList',
//     computed(() => state.users),
// );
=======

const users = ref([]);

const getMembers = async () => {
  const response = await axios.get('http://10.10.0.81:3000/members');
  if (response.status === 200) {
    users.value = response.data;
  }
};

onMounted(() => {
  getMembers();
});
>>>>>>> origin/main
</script>

<style scoped></style>
