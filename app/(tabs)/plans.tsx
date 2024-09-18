import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import {useState,useEffect} from "react";
import {View, StyleSheet, Image, ScrollView} from "react-native";
import {Collapsible} from "../../components/Collapsible";
import ImageCard from "../../components/Decoration/ImageCard";
import {Colors} from "../../constants/Colors";
import moment from "moment";
import DotTextRow from "../components/Text/DotTextRow";
import CardBox from "../../components/General/CardBox";
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
} from 'react-native-reanimated';

const imgOpacity = 1;

const reduceImageOpacity = (item,func) => {
  const offsetPercentage = Number(item.nativeEvent.contentOffset.y / item.nativeEvent.layoutMeasurement.height).toFixed(2)
    func(offsetPercentage)

}
export default function Plans() {
    const [myDate, setMyDate] = useState(dayjs());

    const offset = useSharedValue(1);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity : offset.value
        }
    });

    const imageAnimation  = (value) => {
        offset.value = withTiming(imgOpacity - (value * 2), { duration: 0 })
    }



    return (
        <View style={styles.container}>
            <Animated.View style={animatedStyles}>
            <ImageCard imageSrc={require("../../assets/images/HomeBgCard.jpg")}/>
            </Animated.View>
            <ScrollView onScroll={(item) => {
                reduceImageOpacity(item,imageAnimation)
            }}>
            <View style={{height:180}}/>
            <View style={{alignItems: "center"}}>
                <Collapsible title={moment().format("DD MMMM YYYY")} >
                <DateTimePicker
                    mode="single"
                    date={myDate}
                    onChange={(params) => setMyDate(params.date)}
                    initialView={['day']}
                />
                </Collapsible>
                <View style={{width:"80%"}}>
                    <CardBox/>
                    <CardBox/>
                    <CardBox/>
                    <CardBox/>
                    <CardBox/>
                </View>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
});