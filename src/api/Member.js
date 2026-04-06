import { ref } from 'vue';
import axios from '@/utils/axios';

export const useMember = () => {
  const users = ref([]);

  const fetchAllMembers = async () => {
    const res = await axios.get('/members');
    if (res.status === 200) {
      users.value = res.data;
    }
  };

  return { fetchAllMembers, users };
};
