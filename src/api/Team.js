import { ref } from 'vue';
import axios from '@/utils/axios';

export const useTeam = () => {
    const team = ref([]);

    const fetchTeam = async () => {
        const res = await axios.get('/team');
        team.value = res.data;
    };

    return { fetchTeam, team };
};
