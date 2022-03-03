import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserForm from './views/UserForm';
import UserList from './views/UserList';
import {Button, Icon} from 'react-native-elements';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({navigation}) => {
            return {
              title: 'Lista Usuários',
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('UserForm')}
                  type="clear"
                  icon={<Icon name="add" size={25} color="white" />}
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{title: 'Formulário de Usuários'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleColor: {
    fontWeight: 'bold',
  },
};

export default App;
