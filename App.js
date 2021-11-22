import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 
import Task from "./src/pages/Task/";
import NewTask from "./src/pages/NewTask/";
import Details from "./src/pages/Details/"

const Stack = createStackNavigator();

// video-aula: https://www.youtube.com/watch?v=0AM6AXlFwxM
// site suporte: https://onebitcode.com/react-native-firebase-criando-um-app-completo/
// firebase: supernovavetor: https://console.firebase.google.com/project/univespapp/firestore/data/~2FTasks~2FixStDotIKdXcfW01r0AY

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen
          name="Task"
          component={Task}
          options={{
            headerTintColor: "#F92E6A",
          }}
        />
        <Stack.Screen
          name="New Task"
          component={NewTask}
          options={{
            headerTintColor: "#F92E6A",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#F92E6A",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
