import { API } from "../movie";

const getAiringToday = async () => {
    try {
        const response = await API.get("/tv/airing_today?language=en-US&page=1")

        console.log(response);
        return response.data as ResponseTvShow;

    } catch (error){
    console.log(error)
    }
};

export {getAiringToday};