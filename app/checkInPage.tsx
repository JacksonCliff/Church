import React from 'react';
import {StyleSheet , View} from "react-native";
import {COLORS} from "../constants/Colors";
import EmotionsModal from "../components/General/EmotionsModal";

function CheckInPage(props) {
    return (
        <View style={styles.container}>
            <EmotionsModal/>
        </View>

    );
}

export default CheckInPage;

const styles = StyleSheet.create({
    container : {
        backgroundColor : COLORS.black,
        flex : 1
    }
})