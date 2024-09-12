import { Tabs } from "expo-router";
import { Provider } from 'react-redux';
import {store} from '../Redux/Store/store'
export default function RootLayout() {
  return (
      <Provider store={store}>
        <Tabs screenOptions={{headerShown:false}}>
          <Tabs.Screen name="home" />
          <Tabs.Screen name="plans" />
          <Tabs.Screen name="settings" />
        </Tabs>
      </Provider>
  );
}
