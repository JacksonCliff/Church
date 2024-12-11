//An algorithm that gives data of the current week if given today's date

import moment from "moment";

enum Week {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}



export const getCurrentWeek = (date:string) => {


    const currentDay = Number(date);
    const currentDayIndex = moment().day();

    const daysBeforeCurrentDay = [];
    const daysAfterCurrentDay = [];

    for(let i = currentDayIndex; i >= 1;i--){

        if(i !== currentDayIndex){
            daysBeforeCurrentDay.unshift(currentDay - (currentDayIndex - i))
        }
    }
    for(let j = currentDayIndex; j <= 7;j++){
        if(j !== currentDayIndex){
            daysAfterCurrentDay.push(currentDay + (j - currentDayIndex))
        }
    }

    const currentWeek = [
        ...daysBeforeCurrentDay,
        currentDay,
        ...daysAfterCurrentDay,
    ];

    const currentWeekInActualDate = [

    ]
    console.log(currentWeek,"<===== Current Week")
}

