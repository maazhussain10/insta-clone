import Homepage from "./Components/homepage";
import SignUp from "./Components/signup";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React,{ Component } from "react";

const Stack = createStackNavigator();

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Homepage} />
                    <Stack.Screen name="Signup" component={SignUp} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;
