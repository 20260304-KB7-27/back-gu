<template>
    <link  
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    />
    <div class="bg-gray-900 min-h-screen flex items-center justify-center p-5">
        <div class="grid max-w-5xl">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                <Card2 class="fade-in-items">
                    <div class="w-full rounded-2xl h-[500px] bg-[url('/src/assets/img/김충훈.png')] bg-cover bg-center bg-no-repeat"></div>
                </Card2>
                <Card2 class="fade-in-items">  
                    <div class="border-b border-gray-700 pb-4 mb-5">
                        <h2 class="text-gray-100 font-bold text-2xl flex items-center gap-2 mb-1">
                            {{ user.name }} / {{ user.team }} 
                            <i class="fa-brands fa-github text-xl text-gray-500 hover:text-gray-300 cursor-pointer transition-colors" @click="openGithub"></i>
                        </h2>
                        <div class="flex items-center gap-3 text-gray-400 font-medium mb-1">
                            <span>2001.05.13</span>
                            <span class="w-1 h-1 rounded-full bg-gray-600"></span>
                            <span class="text-red-400 font-bold">ISTJ</span>
                        </div>
                        <!-- <p class="text-gray-500 text-sm">{{ user.email }}</p> -->
                        <p class="text-gray-500 text-sm">kchun0513@hanyang.ac.kr</p>
                    </div>

                    <div class="flex flex-col space-y-4 text-gray-300">                   
                        <div class="space-y-2">
                            <p class="flex items-start gap-2">
                                <span class="text-lg">🎨</span>
                                <span><strong class="text-gray-200">취미 :</strong> 코딩, 헬스, 게임, 축구 경기 관람</span>
                            </p>
                            <p class="flex items-start gap-2">
                                <span class="text-lg">💖</span>
                                <span><strong class="text-gray-200">좋아하는 음식 :</strong> 초밥, 치킨, 족발</span>
                            </p>
                        </div>

                        <div class="expansion bg-gray-700 p-3 rounded-lg border-l-4 border-gray-500 text-gray-200 text-sm font-medium my-2 shadow-inner">
                            "하나에 꽂히면 계속 파고듭니다. 꾸준히 하려고 노력중"
                        </div>

                        <div class="bg-gray-900 p-4 rounded-xl border border-gray-700 mt-2 shadow-sm expansion">
                            <h3 class="font-bold text-red-400 mb-3 flex items-center gap-1">
                                <span>⚠️</span> TMI
                            </h3>
                            <ul class="text-gray-400 text-sm space-y-2">
                                <li class="flex items-start gap-2">
                                    <span class="text-gray-600 mt-0.5">✔</span> 
                                    <span>3대 530(이었음…) 여기 <strong><a href="https://naver.me/GJTiWthm">근처 헬스장</a></strong>에서 운동중!</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-gray-600 mt-0.5">✔</span> 
                                    <span>서브컬처 많이 좋아합니다</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-gray-600 mt-0.5">✔</span> 
                                    <span>K리그 <strong><a href="https://instagram.com/fcseoul">FC서울</a></strong> 17년차 팬입니다⚽</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-gray-600 mt-0.5">✔</span> 
                                    <span>문 앞에서 강사님 앞으로….</span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </Card2>
            </div>
            
            <button class="fade-in-items expansion w-full py-4 rounded-2xl font-bold text-lg cursor-pointer
            shadow-[15px_15px_30px_#111111,-15px_-15px_30px_#222222]
            bg-gradient-to-r from-[#fcaf17] to-[#fdb913]
             text-white active:shadow-[inset_4px_4px_8px_#0b0f19,inset_-4px_-4px_8px_#1e293b]
             transition-all
            " @click="router.push('/')">뒤로가기</button>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';
    import Card from '@/components/Card.vue';
    import Card2 from '@/components/Card2.vue';

    const user = ref({});
    const router = useRouter();

    const getMembers = async () => {
        try {
            const response = await axios.get("http://10.10.0.81:3000/members?name=김충훈");
            console.log(response.data);
            if (response.status === 200) {
                user.value = response.data[0];
            }
        } catch (error) {
            console.error("데이터를 불러오는데 실패했습니다:", error);
        }
    }  

    const openGithub = () => {
        if(user.value.githubURL) {
            // location.href = user.value.githubURL;
            location.href = "https://github.com/kchun0513";
        }
    }

    onMounted(() => {
        getMembers();
    })
</script>

<style scoped>
    .fade-in-items{
        animation: fade-in 2s;
        -moz-animation: fade-in 2s;
        -webkit-animation: fade-in 2s; 
        -o-animation: fade-in 2s;
    }

    .expansion {
        transition: transform 0.4s ease-out;
    }
    .expansion:hover {
        transform: scale(1.03); 
    }
    
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>