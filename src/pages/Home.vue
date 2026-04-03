<template>
    <div class="bg-[#f4f2ee] min-h-screen flex items-center justify-center p-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Card v-for="user in users">
            <UserCard :user="user" />
        </Card>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed, provide } from 'vue';
import Card from '@/components/Card.vue';
import UserCard from '@/components/UserCard.vue';
import { useMember } from '@/api/Member';
const { users, fetchAllMembers } = useMember();

onMounted(() => {
    fetchAllMembers();
});

</script>

<style scoped></style>
