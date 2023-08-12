import axios from 'axios';

export const getPeeps = async (backendLink) => {
    return await axios.get(backendLink);
}