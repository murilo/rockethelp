import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../telas/Home';
import { Details } from '../telas/Details';
import { Register } from '../telas/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="new" component={Register} />
            <Screen name="details" component={Details} />
        </Navigator>
    )
}