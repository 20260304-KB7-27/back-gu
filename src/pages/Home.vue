<template>
  <div
    class="grid grid-cols-1 bg-[#f4f2ee] min-h-screen flex items-center justify-center p-10"
  >
    <div class="flex justify-center mb-10">
      <div
        class="w-full max-w-[500px] h-[200px] rounded-[32px] bg-[#fdf4d9] shadow-[-12px_-12px_24px_rgba(255,255,255,0.95),12px_12px_24px_rgba(214,196,140,0.45)] p-5"
      >
        <div
          class="w-full h-full rounded-[26px] flex flex-col justify-center items-center gap-3 bg-[#fdf4d9] shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.8),inset_6px_6px_12px_rgba(221,201,142,0.35)]"
        >
          <h2 class="text-3xl font-[OkMallangW] font-bold text-[#7b6940]">
            back-gu
          </h2>
          <h2 class="text-3xl font-bold text-[#7b6940] font-[JejuStoneWall]">
            {{ teamData.name }}
          </h2>
          <p class="px-6 text-center text-sm leading-relaxed text-[#8b7a50]">
            " {{ teamData.desc }} "
          </p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
      <Card v-for="user in users">
        <UserCard :user="user" />
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from '@/utils/axios';
// import { today, getLocalTimeZone } from '@internationalized/date';
import Card from '@/components/Card.vue';
import UserCard from '@/components/UserCard.vue';
import { useMember } from '@/api/Member';
const { users, fetchAllMembers } = useMember();

const teamData = ref({});
const getMembers = async () => {
  const response = await axios.get('/members');
  if (response.status === 200) {
    users.value = response.data;
  }
};

const getTeamData = async () => {
  const response = await axios.get('/team');
  if (response.status === 200) {
    teamData.value = response.data;
  }
};

onMounted(() => {
  fetchAllMembers();
  getMembers();
  getTeamData();
});
</script>

<style scoped></style>
