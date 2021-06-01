import React, {createContext, useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './screen/Login';
import Survey from './screen/survey';
import Survey2 from './screen/survey2';
import Answers from './screen/Answers';
import {createStackNavigator} from '@react-navigation/stack';
import {UserContext} from './context/UserContext';
import Home from './screen/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();

const AppNavigation: React.FC = () => {
  const user = useContext(UserContext);

  useEffect(() => {
    AsyncStorage.getItem('userName')
      .then(value => {
        console.log(value);
        user.setUser({
          name: value,
          password: '',
        });
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          {!user?.user?.name ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Survey" component={Survey} />
              <Stack.Screen name="Survey2" component={Survey2} />
              <Stack.Screen name="Answers" component={Answers} />
            </>
          )}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default AppNavigation;
