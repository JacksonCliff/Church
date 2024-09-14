import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import {getDailyVerse} from "../API/ThirdPartyApis";


export const checkAndUpdateDailyVerse = async (globalize) => {
    const data = JSON.parse(await AsyncStorage.getItem("@DailyVerse"));
    const todayDate = moment().format("DDMMYYYY")
    if(data){
          if(data.storedDate !== todayDate){
              data.value = await getDailyVerse();
              data.storedDate = todayDate;
              await AsyncStorage.setItem("@DailyVerse",JSON.stringify(data))
              globalize(data.value)
          }
          globalize(data.value)
    }else{
        const value = await getDailyVerse();
        await AsyncStorage.setItem("@DailyVerse",JSON.stringify({
            value,
            storedDate : todayDate
        }))
        globalize(value)
    }
}