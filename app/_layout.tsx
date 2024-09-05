import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="plans" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
