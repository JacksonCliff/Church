import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the props type if needed, you can also leave it as an empty object if no props are used.
type SettingsProps = NativeStackScreenProps<any, any>; 

const Settings: React.FC<SettingsProps> = (props) => {
    return (
        <View>
          <Text>Hello</Text>  
        </View>
    );
}

export default Settings;