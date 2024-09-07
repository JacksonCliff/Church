import React, {useEffect} from 'react';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    withRepeat, withSequence,
} from 'react-native-reanimated';



function Shaking({children}) {
    const rotation = useSharedValue(0);

    // Toggle scale between 1 and 2


    // Define animated style based on scale value
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        };
    });

    useEffect(() => {
        rotation.value = withRepeat(
            withSequence(
                withTiming(-10, { duration: 250 }),
                withTiming(10, { duration: 250 })
            ),
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

export default Shaking;

