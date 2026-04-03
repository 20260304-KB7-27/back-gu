import { ref } from 'vue';
import axios from '@/utils/axios';

export const useMember = () => {
    const members = ref([]);

    const fetchAllMembers = async () => {
        const res = await axios.get('/members');
        if (res.status === 200) {
            members.value = res.data;
        }
    };

    return { fetchAllMembers, members };
};
