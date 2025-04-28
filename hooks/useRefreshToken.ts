import axios from 'axios';

const useRefreshToken = () => {

    const getRefreshToken = async () => {
        try {
            const response = await axios.get("/api/refresh");
            window.localStorage.setItem("accessToken", response.data.newAccessToken);
            return response.data.newAccessToken;     
        } catch (error) {
            console.log(error);
        }
    };

    return getRefreshToken;
}

export default useRefreshToken