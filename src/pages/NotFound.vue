<template>
  <div
    class="bg-[#f4f2ee] min-h-screen flex items-center justify-center p-10 font-sans"
  >
    <div
      class="bg-[#f4f2ee] rounded-[40px] p-16 shadow-[20px_20px_60px_#cfceca,-20px_-20px_60px_#ffffff] flex flex-col items-center justify-center text-center max-w-lg w-full transition-all duration-300 hover:shadow-[10px_10px_30px_#cfceca,-10px_-10px_30px_#ffffff]"
    >
      <div
        class="w-32 h-32 rounded-full bg-[#f4f2ee] shadow-[inset_10px_10px_20px_#cfceca,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center mb-10"
      >
        <h1
          class="text-7xl font-extrabold text-[#a2a09c] tracking-tighter shadow-text"
        >
          404
        </h1>
      </div>

      <div class="mb-12">
        <h2 class="text-3xl font-bold text-[#4a4a4a] mb-4">
          페이지를 찾을 수 없습니다.
        </h2>
        <p class="text-[#7a7a7a] leading-relaxed">
          죄송합니다. 요청하신 페이지가 존재하지 않거나,<br />
          다른 주소로 이동되었을 수 있습니다.
        </p>
      </div>

      <button
        @click="goHome"
        class="bg-[#f4f2ee] text-[#4a4a4a] font-semibold px-10 py-4 rounded-full shadow-[6px_6px_12px_#cfceca,-6px_-6px_12px_#ffffff] transition-all duration-200 hover:shadow-[2px_2px_5px_#cfceca,-2px_-2px_5px_#ffffff] active:shadow-[inset_3px_3px_6px_#cfceca,inset_-3px_-3px_6px_#ffffff] active:scale-95 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        홈으로 돌아가기
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  if (router) {
    router.push('/');
  } else {
    window.location.href = '/';
  }
};
</script>

=
