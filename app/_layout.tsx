import { Stack } from 'expo-router/stack';
import {Provider} from "react-redux";
import {store} from '../Redux/Store/store'

export default function Layout() {
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="prayer" options={{ headerShown: false }} />
                <Stack.Screen name="checkInPage" options={{ headerShown: false }} />
                <Stack.Screen name="devotionPage" options={{ headerShown: false }} />
                <Stack.Screen name="quizIntroPage" options={{ headerShown: false }} />
                <Stack.Screen name="searchPage" options={{ headerShown: false }} />
            </Stack>
        </Provider>
    );
}