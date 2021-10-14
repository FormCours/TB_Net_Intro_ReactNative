import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import Home from './pages/home/home';
import TodoForm from './pages/todo-form/todo-form';
import TodoList from './pages/todo-list/todo-list';

const MainMenu = createDrawerNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <MainMenu.Navigator initialRouteName='home' backBehavior='history' >
          <MainMenu.Screen name='home' component={Home}
                           options={{
                             title:'Accueil'
                           }} />
          <MainMenu.Screen name='todo/form' component={TodoForm}
                           options={{
                             title:'Formulaire'
                           }} />
          <MainMenu.Screen name='todo/list' component={TodoList}
                           options={{
                             title:'Liste'
                           }} />
        </MainMenu.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};


export default App;
