import { Provider } from 'react-redux';
import {store} from "./Redux/Store/store";
import Tabs from './app/_layout'


function App() {
    return (
        <Provider store={store}>
            <Tabs/>
        </Provider>
    )
}