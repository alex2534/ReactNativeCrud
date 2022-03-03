import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import users from '../data/User';

const UserList = props => {
  const getActions = () => {
    return (
      <Button
        onPress={user => props.navigation.navigate('UserForm', user)}
        type="clear"
        icon={<Icon name="edit" size={25} color="orange" />}
      />
    );
  };

  const getUserItem = ({item: user}) => {
    return (
      <View>
        <ListItem
          key={user.id}
          title={user.lastName}
          subtitle={user.lastName}
          bottomDivider
          rightElement={getActions()}
          onPress={() => props.navigation.navigate('UserForm', user)}
        />
      </View>
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
