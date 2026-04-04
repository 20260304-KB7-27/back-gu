<template>
    <link  
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    />
    <div 
        class="min-h-screen flex items-center justify-center p-5 transition-colors duration-700" 
        :class="lightOn ? 'bg-[#f4f2ee]' : 'bg-gray-900 light-off-bg'"
    >
        <div class="grid max-w-5xl">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                <Card2 class="opacity-0 expansion photo" :class="{'fade-in-items' : cardOn, 'fade-out-items' : !cardOn && !isFirstLoad}" @click="togglePhoto" >
                    <div class="w-full rounded-2xl h-full bg-[url('/src/assets/img/김충훈.png')] bg-cover bg-center bg-no-repeat"></div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8254544793112!2d139.76706579999998!3d35.681299599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z64-E7L-E!5e0!3m2!1sko!2skr!4v1775329964204!5m2!1sko!2skr" 
                    class="w-full h-full rounded-2xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Card2>
                <Card2 :class="{'fade-in-items' : cardOn2, 'fade-out-items' : !cardOn2 && !isFirstLoad}" class="opacity-0 content-center">
                    <div class="border-b border-gray-700 pb-4 mb-5">
                        <h2 class="text-gray-100 font-bold text-2xl flex items-center gap-2 mb-1">
                            {{ user.name }} / {{ user.team }} 
                            <i class="fa-brands fa-github text-xl text-gray-500 hover:text-gray-300 cursor-pointer transition-colors" @click="openGithub"></i>
                            <i class="fa-brands fa-instagram text-xl text-gray-500 hover:text-gray-300 cursor-pointer transition-colors" @click="openInsta"></i>
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
            
            <button class="expansion w-full py-4 rounded-2xl font-bold text-lg cursor-pointer
            shadow-[15px_15px_30px_#111111,-15px_-15px_30px_#222222]
            bg-gradient-to-r from-[#fcaf17] to-[#fdb913]
             text-white active:shadow-[inset_4px_4px_8px_#0b0f19,inset_-4px_-4px_8px_#1e293b]
             transition-all opacity-0
            " :class="{'fade-in-items': buttonOn, 'fade-out-items' : !buttonOn && !isFirstLoad}" type="button" @click="moveToHome">뒤로가기</button>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import axios from 'axios';
    import Card2 from '@/components/Card2.vue'; // Card 안 쓰는 부분 정리

    const user = ref({});
    const router = useRouter();
    const cardOn = ref(false);
    const cardOn2 = ref(false);
    const buttonOn = ref(false);
    const lightOn = ref(false);
    const isFirstLoad = ref(true); // 처음 렌더링 시 fade-out 방지용

    const getMembers = async () => {
        try {
            const response = await axios.get("http://10.10.0.81:3000/members?name=김충훈");
            // const response = await axios.get("http://localhost:3000/members?name=김충훈");
            if (response.status === 200) {
                user.value = response.data[0];
            }
            
            // setInterval이 아닌 setTimeout 사용
            setTimeout(() => { cardOn.value = true }, 300);
            setTimeout(() => { cardOn2.value = true }, 600);
            setTimeout(() => { 
                buttonOn.value = true;
                isFirstLoad.value = false; // 등장 애니메이션 끝난 후 상태 변경
            }, 900);

        } catch (error) {
            console.error("데이터를 불러오는데 실패했습니다:", error);
        }
    }  

    const openGithub = () => {
        if(user.value.githubURL) {
            location.href = "https://github.com/kchun0513";
        }
    }
    const openInsta = () => {
        if(user.value.githubURL) {
            location.href = "https://instagram.com/01_choonghun";
        }
    }

    const moveToHome = (e) => {
        // 1. 혹시 모를 브라우저 기본 동작 방지
        if (e) e.preventDefault(); 
    
        // 누가 이 함수를 불렀는지 추적!
        console.trace("🚨 moveToHome이 여기서 실행됨!");

        buttonOn.value = false;
        setTimeout(() => { cardOn2.value = false }, 200);
        setTimeout(() => { cardOn.value = false }, 400);
        
        setTimeout(() => {
            console.log("2. 불 켜짐(배경 밝아짐)");
            lightOn.value = true;
        }, 900);

        setTimeout(() => {
            console.log("3. 홈으로 라우터 이동");
            router.push('/');
        }, 1500); 
    }

    onMounted(() => {
        getMembers();
    })
</script>

<style scoped>
    .fade-in-items {
        animation: fade-in 0.8s forwards cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .fade-out-items {
        /* 사라질 때는 화면 아래로 떨어지도록 설정 */
        animation: fade-out 0.6s forwards cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .light-off-bg {
        animation: fade-in-bg 1.5s;
    }

    iframe {
        opacity: 0;
    }

    .photo:hover > div {
        display: none
    }

    .photo:hover > iframe {
        opacity: 1;
        transition: opacity 0.3s ease-in;
    }

    .expansion:hover {
        scale: 1.03;
        transition: scale 0.4s ease-out;
    }

    iframe {
        transition: display 1.0s ease-in;
    }

    @keyframes fade-in-bg{
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fade-out-bg {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fade-out {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(30px); /* 화면 아래로 사라지는 효과 */
        }
    }
</style>