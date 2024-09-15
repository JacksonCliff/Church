import axios from "axios";
import {DAILY_VERSE} from "./ThirdPartyUrls";
import {scriptureApiBibleKey} from "../KEYS/ThirdPartyKeys";

const configs = {
    headers : {
        'Authorization': `Bearer ${scriptureApiBibleKey}`
    }
}

export const getDailyVerse = async () => {
    console.log("<======= API GETTING CALLED")
    try{
        const response = await axios.get(DAILY_VERSE,configs);
        return response.data.verse.details.text;
    }catch (error) {
        console.error("Error fetching the daily verse:", error);
        throw error;
    }
}