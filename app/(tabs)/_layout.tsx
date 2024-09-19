import { Tabs } from "expo-router";
import React from "react";
export default function RootLayout() {
  return (
          <Tabs screenOptions={{headerShown:false}}>
              <Tabs.Screen name="index" />
              <Tabs.Screen name="plans" />
              <Tabs.Screen name="settings"  />

        </Tabs>
  );
}
