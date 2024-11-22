import React , {useState} from 'react';
import {Modal , Text , TouchableOpacity , View , StyleSheet , Dimensions} from "react-native";
import { COLORS } from "../../constants/Colors";

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

const screenWidth = Dimensions.get("screen").width;

function EmotionsModal(props) {

    const [open,setOpen] = useState(true);

    const handleToggle = () => {
        setOpen(false);
    }

    return (
        <Modal
            transparent={true}
            visible={open}
            animationType="fade"
        >
            <View style={{ flex: 1, backgroundColor: COLORS.dark08, padding: 20 }}>
                <TouchableOpacity onPress={handleToggle} style={{width: 30,height : 30,alignSelf:"flex-end"}}>
                    <Text style={{ color: COLORS.white }}>Skip</Text>
                </TouchableOpacity>

                <View style={{flex:1,alignItems:"center",marginTop:"30%"}}>
                    <Text style={{ color: COLORS.white, marginBottom: 20 ,fontSize : 20,marginVertical:10}}>How do you feel today?</Text>

                    <View style={styles.emoteContainer}>
                        {data.map(item => (
                            <View key={item.id} style={styles.emoteBtnContainer}>
                                <TouchableOpacity style={styles.emoteBtn}>
                                    <Text style={styles.emoteText}>{item.emote}</Text>
                                </TouchableOpacity>
                                <Text style={{color:COLORS.white}}>{item.value}</Text>
                            </View>
                        ))}
                    </View>
                </View>

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    emoteContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignSelf : 'center'
    },
    emoteBtnContainer: {
        width: screenWidth * 0.28,
        justifyContent: "center",
        alignItems: "center",
        marginBottom : 10
    },
    emoteBtn: {
        width: '100%',
        backgroundColor: COLORS.light06,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        height  : screenWidth * 0.28,

    },
    emoteText: {
        fontSize: 50,
    },
});

export default EmotionsModal;
