import axios from "axios";
import {DAILY_VERSE} from "./ThirdPartyUrls";
import {scriptureApiBibleKey} from "../KEYS/ThirdPartyKeys";

const configs = {
    headers : {
        'Authorization': `Bearer ${scriptureApiBibleKey}`
    }
}


export const getDailyVerse = () => {
    return axios.get(DAILY_VERSE,configs).then(response => response.data.verse.details.text)
}