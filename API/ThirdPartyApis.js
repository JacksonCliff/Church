import axios from "axios";
import {DAILY_VERSE} from "./ThirdPartyUrls";
import {scriptureApiBibleKey} from "../KEYS/ThirdPartyKeys";

const configs = {
    headers : {
        'Authorization': `Bearer ${scriptureApiBibleKey}`
    }
}

export const getDailyVerse = async () => {
    try{
        const response = await axios.get(DAILY_VERSE,configs);
        console.log(response.data.verse.details,"<======= API GETTING CALLED")

        return response.data.verse.details;
    }catch (error) {
        console.error("Error fetching the daily verse:", error);
        throw error;
    }
}