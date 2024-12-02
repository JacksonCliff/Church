import React from 'react';
import {StatusBar , StyleSheet , View , Text , TouchableOpacity} from "react-native";
import {COLORS} from "../constants/Colors";
import EmotionsModal from "../components/General/EmotionsModal";
import {MaterialIcons} from "@expo/vector-icons";
import AppText from "../components/General/AppText";

const data = [
    { id: 1, value: "Angry", emote: "😡" },
    { id: 2, value: "Weak", emote: "🤕" },
    { id: 3, value: "Anxious", emote: "😖" },
    { id: 4, value: "Fearful", emote: "😨" },
    { id: 5, value: "Faithful", emote: "🙏" },
    { id: 6, value: "Sad", emote: "😢" },
    { id: 7, value: "Calm", emote: "😊" },
    { id: 8, value: "Happy", emote: "😊" },
    { id: 9, value: "Blessed", emote: "🥰" }
];

function CheckInPage(props) {
    return (
        <View style={styles.container}>
            <EmotionsModal/>
            <View style={styles.mainContent}>
                <MaterialIcons name={"arrow-back-ios"} size={28} color={COLORS.dark08}/>

                <View style={{flex:1,flexDirection : "row",backgroundColor:"black",alignItems : "flex-end"}}>
                    <View style={{flex:2}}>
                        <AppText color={"white"} className={"large"}>
                            You have completed your 6 check-in!
                        </AppText>
                        <AppText color={"white"} className={"small"}>
                            December 2024
                        </AppText>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={{backgroundColor:COLORS.light06,borderTopLeftRadius : 25,borderBottomLeftRadius : 25,width : 50,height : 40,justifyContent:"center",alignItems: "center"}}>
                            <MaterialIcons name={"arrow-back-ios"} size={20} color={COLORS.white}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:COLORS.light06,borderTopRightRadius : 25,borderBottomRightRadius : 25,width : 50,height : 40,justifyContent:"center",alignItems: "center"}}>
                            <MaterialIcons name={"arrow-forward-ios"} size={20} color={COLORS.white}/>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{flex : 4}}>

                    {/* Day section */}
                    <View style={{flex:1,backgroundColor:"black",paddingTop:10,flexDirection:"row"}}>
                        {
                            [1,2,3,4,5,6,7].map(item => (
                                <View key={item} style={{flex:1,margin:10,alignItems:"center"}}>
                                    <AppText color={"white"} className={"small"}>SAT</AppText>
                                    <View style={{marginVertical:15}}>
                                        <AppText className={"medium"}>😡</AppText>
                                    </View>
                                    <AppText color={"white"} className={"small"}>{ item }</AppText>
                                </View>)
                            )


                        }
                    </View>

                    {/* Mood section */}
                    <View style={{flex:1,backgroundColor:"green"}}>

                    </View>

                    {/* Btn section */}
                    <View style={{flex:2,backgroundColor:"blue"}}>

                    </View>
                </View>
            </View>
        </View>

    );
}

export default CheckInPage;

const styles = StyleSheet.create({
    container : {
        backgroundColor : COLORS.white,
        flex : 1
    },
    mainContent : {
        paddingTop : StatusBar.currentHeight,
        padding : 10,
        backgroundColor : "cyan",
        flex : 1
    },
    btnContainer : {
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        borderRadius : 50,
        padding : 5,
        alignItems : "center"
    }
})