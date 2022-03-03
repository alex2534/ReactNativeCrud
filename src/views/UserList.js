import React from 'react';
import {View, FlatList, Alert} from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import users from '../data/User';

const UserList = props => {

  const confirmUserDelition = () =>{
    Alert.alert("Deseja excluir usuario",
   [ {
      text: "Sim",
      onPress(){
        console.warn("delete" + user.name)
      }
    },{
      test: "nâo"
    }])
  }


  const getActions = (user) => {
    return (
      <>
      <Button
        onPress={user => props.navigation.navigate('UserForm', user)}
        type="clear"
        icon={<Icon name="edit" size={25} color="orange" />}
      />
      <Button
      onPress={ () => confirmUserDelition(user)}
      type="clear"
      icon={<Icon name="delete" size={25} color="red" />}
    />
    </>
    );
  };

  const getUserItem = ({item: user}) => {
    return (
      <ListItem        
        key={user.id}
        title={user.lastName}
        subtitle={user.lastName}
        bottomDivider
        rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm', user)}
      />
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  );
};

export default UserList;
