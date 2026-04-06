<script setup>
import { ref, computed } from 'vue';
import ButtonYellow from '@/components/ButtonYellow.vue';

const props = defineProps({
  user: Object,
});

const isFollowed = ref(false);

const toggleFollow = () => {
  isFollowed.value = !isFollowed.value;
};

const followBtnClass = computed(() => [
  'w-full py-3 rounded-2xl font-bold transition-all duration-200 shadow-[6px_6px_12px_#d9d5ce,-6px_-6px_12px_#ffffff]',
  isFollowed.value
    ? 'bg-[#f4f2ee] text-[#645b4c]'
    : 'bg-gradient-to-r from-[#fcaf17] to-[#fdb913] text-white',
]);
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="p-10 bg-[#f4f2ee]">
      <div
        class="w-35 h-35 rounded-full flex items-center justify-center bg-[#f4f2ee] shadow-[6px_6px_12px_#d9d5ce,-6px_-6px_12px_#ffffff]"
      >
        <img
          :src="`/${user.id}-img.jpeg`"
          class="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>

    <h2 class="text-[#645b4c] font-bold text-xl mb-3">{{ user.name }}</h2>
    <p class="text-[#a39b8f] text-sm mb-6">{{ user.email }}</p>

    <ButtonYellow v-model="isFollowed" :userId="user.id" />
  </div>
</template>
