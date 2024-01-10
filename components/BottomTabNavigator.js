import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PlaneScreen from "../screens/Plane";
import RegisterScreen from "../screens/Register";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Registro aviones" component={RegisterScreen} />
          <Tab.Screen name="Historial de aviones" component={PlaneScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
