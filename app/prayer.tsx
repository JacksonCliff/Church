import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView
} from "react-native";
import {COLORS} from "../constants/Colors";
import Shaking from "../components/Animation/Shaking";
import {FontAwesome, FontAwesome5, Foundation, MaterialIcons} from "@expo/vector-icons";
import Pulsing from "../components/Animation/Pulsing";
import {Link} from "expo-router";
import AppBtn from "../components/General/AppBtn";
import {useSelector} from "react-redux";

const HEIGHT = Dimensions.get("screen").height;


function Prayer(props) {
    const dailyVerse = useSelector((state) => state.counter.value);

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <View style={styles.sectionA}>
                    <ImageBackground imageStyle={"center"} style={{width:"100%",height:HEIGHT/2}} source={require("../assets/images/peaceful01.jpeg")}>
                        <View style={{width:"100%",paddingTop:StatusBar.currentHeight + 20,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20}}>
                            <MaterialIcons name={"event-available"} size={28} color={COLORS.white}/>
                            <Shaking>
                                <MaterialIcons name={"event-available"} size={28} color={COLORS.white}/>
                            </Shaking>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{color:"white",fontSize:20,textAlign:"center",marginTop:40}}>Verse Of The Day</Text>
                            <Text style={{color:"white",fontSize:14,marginTop:10,marginHorizontal:5,textAlign:"center"}}>
                                {"----------   " + dailyVerse.reference + "   ----------"}
                            </Text>
                            <Text numberOfLines={4} style={{color:"white",fontSize:20,marginTop:20,marginHorizontal:5,textAlign:"center"}}>
                                {dailyVerse.value}
                            </Text>
                        </View>
                        <View style={{position:"absolute",bottom:40,width:"100%",flexDirection:"row",justifyContent:"center"}}>
                            <TouchableOpacity style={styles.glassButton}>
                                <FontAwesome name={"share"} size={20} color={COLORS.white}/>
                            </TouchableOpacity>
                            <View style={{width:80}}/>
                            <TouchableOpacity style={styles.glassButton}>
                                <Foundation name={"clipboard-notes"} size={20} color={COLORS.white}/>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.sectionB}>
                    <Text style={{fontSize : 22,color:"black",margin:10}}>Meditation</Text>
                    <Text style={{fontSize : 18}}>{dailyVerse.value + dailyVerse.value}</Text>

                    <Text style={{fontSize : 22,color:"black",margin:10}}>Meditation</Text>
                    <Text style={{fontSize : 18}}>{dailyVerse.value + dailyVerse.value}</Text>


                    <Text style={{fontSize : 22,color:"black",margin:10}}>Meditation</Text>
                    <Text style={{fontSize : 18}}>{dailyVerse.value + dailyVerse.value}</Text>


                    <Text style={{fontSize : 22,color:"black",margin:10}}>Meditation</Text>
                    <Text style={{fontSize : 18}}>{dailyVerse.value + dailyVerse.value}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default Prayer;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "rgb(245,245,245)",
    },
    sectionA : {
        width : "100%",
        flex: 1
    },
    sectionB : {
        width : "100%",
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        backgroundColor : COLORS.white,
        alignItems : "center",
        padding : 20,
        top : -20,
        flex: 1
    },
    glassButton : {
        borderRadius : 50,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "rgba(255,255,255,0.3)",
        width : 35,
        height : 35
    },
});
