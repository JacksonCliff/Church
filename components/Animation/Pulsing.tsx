import React, {useEffect} from 'react';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    withRepeat,
} from 'react-native-reanimated';



function Pulsing({children}) {
    const scale = useSharedValue(1);

    // Toggle scale between 1 and 2


    // Define animated style based on scale value
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    useEffect(() => {
        scale.value = withRepeat(
            withTiming(scale.value * 1.05, { duration: 1000 }),
            -1,
            true
        );

    }, []);
    return (
        <Animated.View style={animatedStyle}>
            {children}
        </Animated.View>
    );
}

export default Pulsing;

