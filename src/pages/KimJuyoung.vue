<template>
  <div class="flex items-center justify-center min-h-screen bg-[#e9f0f7]">
    <div
      class="w-[340px] p-8 rounded-[32px] bg-gradient-to-br from-[#ffffff]/70 to-[#e9f0ff]/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(163,191,250,0.25)]"
    >
      <!-- 상단 글로우 바 -->
      <div
        class="mb-6 py-2 text-center text-white font-semibold rounded-full bg-gradient-to-r from-[#b8c6ff] via-[#cdb4ff] to-[#ffc8dd] shadow-[0_8px_20px_rgba(180,180,255,0.5)]"
      >
        ✨ PROFILE ✨
      </div>

      <!-- 카드 -->
      <div class="flex flex-col gap-4 text-center">
        <div class="flex items-center justify-center">
          <img
            src="../assets//profile-jy-img.jpeg"
            class="w-[250px] h-[250px] rounded-full"
          />
        </div>
        <h1 class="text-xl font-bold text-[#5b5f7a]">
          {{ juyoung.name }}
        </h1>

        <p class="text-sm text-[#7b809a]">
          {{ juyoung.email }}
        </p>

        <p class="text-sm text-[#7b809a]">
          {{ juyoung.mbti }}
        </p>

        <p class="text-sm text-[#6b708c] leading-relaxed">
          {{ juyoung.desc }}
        </p>
      </div>

      <button
        class="mt-8 w-full py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#7de2d1] via-[#a0e7e5] to-[#b4f8c8] shadow-[0_10px_25px_rgba(125,226,209,0.5)] hover:scale-105 active:scale-95 transition"
        @click="router.push('/')"
      >
        뒤로 가기
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from '@/utils/axios';
import { useRouter } from 'vue-router';

const juyoung = ref({});
const router = useRouter();

const member = async () => {
  try {
    const response = await axios.get('/members');
    const data = response.data.find((member) => member.name === '김주영');
    juyoung.value = data;
  } catch (error) {
    console.error('Error fetching members:', error);
  }
};

onMounted(() => {
  member();
});
</script>

<style scoped></style>
