import axios from 'axios';

const useRefreshToken = () => {
    let userInfo = {};

    if (typeof window !== "undefined") {
        const stored = localStorage.getItem("userInfo");
        if (stored) {
            try {
                userInfo = JSON.parse(stored);
            } catch (e) {
                console.error("Failed to parse userInfo from localStorage", e);
                userInfo = {};
            }
        }
    }

    const getRefreshToken = async () => {
        try {
            const response = await axios.get("/api/refresh");
            window.localStorage.setItem("userInfo", JSON.stringify({
                ...userInfo,
                accessToken: response.data.newAccessToken
            }));
            return response.data.newAccessToken;     
        } catch (error) {
            console.log(error);
        }
    };

    return getRefreshToken;
}

export default useRefreshToken