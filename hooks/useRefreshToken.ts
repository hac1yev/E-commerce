import axios from 'axios';

const useRefreshToken = () => {

    const getRefreshToken = async () => {
        try {
            const response = await axios.get("/api/refresh");
            console.log(response);
            return response;            
        } catch (error) {
            console.log(error);
        }
    };

    return getRefreshToken;
}

export default useRefreshToken