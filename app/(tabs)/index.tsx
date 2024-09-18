import React, {useEffect} from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from "react-native";
import {FontAwesome, FontAwesome5, Foundation, MaterialIcons} from "@expo/vector-icons";
import AppBtn from "../../components/General/AppBtn";
import FilterList from "../../components/General/FilterList"
import {data1} from "../../assets/Data/UIData";
import {COLORS} from "../../constants/Colors";
import Pulsing from "../../components/Animation/Pulsing";
import Shaking from "../../components/Animation/Shaking";
import {getDailyVerse} from "../../API/ThirdPartyApis"
import { useSelector, useDispatch } from 'react-redux';
import {updateDailyVerse} from "../../Redux/Slices/HomeSlice";
import {checkAndUpdateDailyVerse} from '../../LocalStorage/AsyncStorageFns'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Link} from "expo-router";
const WIDTH = Dimensions.get("screen").width;


function Index(props) {
    const dailyVerse = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    useEffect(() => {
        checkAndUpdateDailyVerse((verse) => dispatch(updateDailyVerse(verse)))
    },[])

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.sectionA}>
                    <ImageBackground imageStyle={"center"} style={{width:"100%",height:350,paddingTop : StatusBar.currentHeight}} source={require("../../assets/images/peaceful01.jpeg")}>
                        <View style={{width:"100%",paddingTop:20,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20}}>
                            <Text style={{color:COLORS.white,fontSize:22}}>Verse of the Day</Text>
                            <Shaking>
                                <MaterialIcons name={"event-available"} size={28} color={COLORS.white}/>
                            </Shaking>
                        </View>
                        <View style={{justifyContent:"center",height:"70%"}}>
                            <Text numberOfLines={4} style={{color:"white",fontSize:20,marginTop:20,marginHorizontal:5,textAlign:"center"}}>{dailyVerse.value}</Text>
                            <Text style={{color:"white",fontSize:14,marginTop:20,marginHorizontal:5,textAlign:"center"}}>{dailyVerse.reference}</Text>

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

                    <View style={{flexShrink:1,backgroundColor : COLORS.white,margin : 15,padding:10,borderRadius:20}}>
                        <Text style={{fontSize :20,fontWeight : "600",marginHorizontal : 10}}>Morning Pray</Text>
                        <Text style={{fontSize : 15,color : COLORS.dark08,marginHorizontal:10,marginBottom:20,marginTop:5}}>Start Your Day With This Verse</Text>
                        <Pulsing>
                            <Link href={'/plans'} asChild>
                                <TouchableOpacity style={{width:50,height:50,backgroundColor:"red"}}></TouchableOpacity>
                            </Link>
                        </Pulsing>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",margin : 15}}>

                        <View style={{backgroundColor:COLORS.white,width:"28%",height: (WIDTH * 25) / 100, borderRadius : 20 }}>
                            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                <FontAwesome5 name={"clipboard-list"} color={COLORS.black} size={30}/>
                                <Text style={{marginTop:5}}>Quiz</Text>
                            </View>
                        </View>

                        <View style={{backgroundColor:COLORS.white,width:"28%",height: (WIDTH * 25) / 100, borderRadius : 20 }}>
                            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                <FontAwesome5 name={"bible"} color={COLORS.black} size={30}/>
                                <Text style={{marginTop:5}}>Bible</Text>
                            </View>
                        </View>

                        <View style={{backgroundColor:COLORS.white,width:"28%",height: (WIDTH * 25) / 100, borderRadius : 20 }}>
                            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                <FontAwesome5 name={"search"} color={COLORS.black} size={30}/>
                                <Text style={{marginTop:5}}>Search</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.sectionC}>
                    <View style={{marginHorizontal:15,marginTop:10,height:90,backgroundColor:COLORS.white,flexDirection:"row",alignItems:"center",padding:15,borderRadius:15}}>
                        <FontAwesome5 name={"praying-hands"} style={{marginHorizontal:10}} color={COLORS.black} size={25}/>
                        <Text style={{marginLeft:10,fontSize : 18,fontWeight:"600"}}>Archived Daily Devotionals</Text>
                    </View>
                    <View style={{marginHorizontal:15,marginTop:10,height:90,backgroundColor:COLORS.white,flexDirection:"row",alignItems:"center",padding:15,borderRadius:15}}>
                        <FontAwesome5 name={"swatchbook"} style={{marginHorizontal:10}} color={COLORS.black} size={25}/>
                        <Text style={{marginLeft:15,fontSize : 18,fontWeight:"600"}}>Select Your Reading Plans</Text>
                    </View>

                    <View style={{marginTop : 15}}>
                        <FilterList data={data1} title={"GOD'S WORDS FOR TODAY"}/>
                    </View>
                </View>

            </View>
        </ScrollView>


    );
}

export default Index;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "rgb(245,245,245)",

    },
    sectionA : {
        width : "100%"
    },
    sectionB : {
        width : "100%",
        top : -20,
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        backgroundColor : "rgb(245,245,245)",
    },
    glassButton : {
        borderRadius : 50,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "rgba(255,255,255,0.3)",
        width : 35,
        height : 35
    },
    sectionC : {
        top : -20
    }
})