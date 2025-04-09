import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';


import HomeScreen from './screen/HomeScreen';
import ComponentsScreen from './screen/ComponentsScreen';
import SensorScreen from './screen/SensorScreen';
import TeamScreen from './screen/TeamScreen';
import TrajectoryScreen from './screen/TrajectoryScreen';

// Pantalla temporal para manejar errores
const ErrorScreen = ({ message }) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{message}</Text>
  </View>
);




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            if (route.name === 'Components') iconName = focused ? 'hardware-chip' : 'hardware-chip-outline';
            if (route.name === 'Trajectory') iconName = focused ? 'map' : 'map-outline';
            if (route.name === 'Sensors') iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            if (route.name === 'Team') iconName = focused ? 'people' : 'people-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            elevation: 5,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Components" component={ComponentsScreen} options={{ title: 'Componentes' }}/>
        <Tab.Screen name="Trajectory" component={TrajectoryScreen} options={{ title: 'Trayectoria' }}/>
        <Tab.Screen name="Sensors" component={SensorScreen} options={{ title: 'Sensores' }}/>
        <Tab.Screen name="Team" component={TeamScreen} options={{ title: 'Equipo' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});