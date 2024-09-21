import React from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";
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

function EmotionsModal(props) {
    return (
        <Modal
            transparent={true}
            visible={true}
            animationType="fade"
        >
            <View style={{ flex: 1, backgroundColor: COLORS.dark08, padding: 20 }}>
                <TouchableOpacity>
                    <Text style={{ color: COLORS.white }}>Skip</Text>
                </TouchableOpacity>

                <Text style={{ color: COLORS.white, marginBottom: 20 }}>How do you feel today?</Text>

                <View style={styles.emoteContainer}>
                    {data.map(item => (
                        <TouchableOpacity key={item.id} style={styles.emoteButton}>
                            <Text style={styles.emoteText}>{item.emote}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    emoteContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around", // Use space-around for equal spacing
    },
    emoteButton: {
        width: '30%', // Set width to ensure 3 items per row
        backgroundColor: COLORS.gray,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10, // Optional: Adds some vertical space between rows
    },
    emoteText: {
        fontSize: 50,
    },
});

export default EmotionsModal;
