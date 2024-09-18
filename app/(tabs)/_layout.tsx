import { Tabs } from "expo-router";
import { Provider } from 'react-redux';
import {store} from '../../Redux/Store/store'
import {StatusBar} from "react-native";
import React from "react";
export default function RootLayout() {
  return (
      <Provider store={store}>
          <Tabs screenOptions={{headerShown:false}}>
              <Tabs.Screen name="index" />
              <Tabs.Screen name="plans" />
              <Tabs.Screen name="newscreen" />
              <Tabs.Screen name="settings"  />

        </Tabs>
      </Provider>
  );
}
