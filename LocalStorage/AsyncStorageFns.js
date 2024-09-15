import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import {getDailyVerse} from "../API/ThirdPartyApis";


export const checkAndUpdateDailyVerse = async (globalize) => {
    try{
        const storedData = await AsyncStorage.getItem("@DailyVerse");
        const data = storedData ? JSON.parse(storedData) : null;
        const todayDate = moment().format("DDMMYYYY");

        let dailyVerse;
        if(data && data.storedDate === todayDate){
            dailyVerse = data.value;
        }else{
            dailyVerse = await getDailyVerse();
            const newData = {
                value: dailyVerse,
                storedDate: todayDate,
            };
            await AsyncStorage.setItem("@DailyVerse",JSON.stringify(newData))
        }
        globalize(dailyVerse)
    } catch (error) {
        console.error("Error in checkAndUpdateDailyVerse:", error);
    }
}