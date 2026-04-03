<script setup>
import Card from '@/components/Card.vue';

const props = defineProps({
  user: Object,
});
</script>
<template>
  <div class="flex items-center justify-center min-h-screen bg-[#f4f2ee]">
    <Card class="w-full max-w-sm p-8 flex flex-col items-center">
      <div class="flex flex-col items-center">
        <div class="p-10 bg-[#f4f2ee]">
          <div
            class="w-28 h-28 rounded-full flex items-center justify-center mb-4 bg-[#f4f2ee] /* 더 선명한 뉴모피즘 그림자 효과 */ shadow-[6px_6px_12px_#d9d5ce,-6px_-6px_12px_#ffffff]"
          >
            <div
              class="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden shadow-[inset_6px_6px_12px_#d9d5ce,inset_-6px_-6px_12px_#ffffff]"
            >
              <img
                src="https://octapi.lxzin.com/imageBlockProp/image/202303/22/720/0/660c4938-c809-4a5b-b28a-356c1d6620ad.jpg"
                alt="프로필 이미지"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h2 class="text-[#645b4c] font-bold text-xl">KNH</h2>
        <p class="text-[#a39b8f] text-sm mb-6">벚꽃 사진 찍으러 가고 싶어요</p>
      </div>
    </Card>
  </div>
</template>
