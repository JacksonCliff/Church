import axios from "axios";
import {DAILY_VERSE} from "./ThirdPartyUrls";
import {scriptureApiBibleKey} from "../KEYS/ThirdPartyKeys";

const configs = {
    headers : {
        'Authorization': `Bearer ${scriptureApiBibleKey}`
    }
}


export const getDailyVerse = () => {
    axios.get(DAILY_VERSE,configs).then(res => console.log(res.data.verse.details.text," <====== Daily Verse"))
}