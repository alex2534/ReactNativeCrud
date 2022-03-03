import React, { useState } from 'react';
import {Text, TextInput} from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';

const UserForm = (props) => {

  const [user, setUser] = useState(props.route.params? route.params: {})

  return (
  <View style={style.form}>
    <Text>Nome</Text>
    <TextInput  
    style={style.input}
    onChangeText={firstName => setUser({...user, firstName})}
    placeholder="Nome"
    value={user.firstname}
    />
    <Text>Sobre nome</Text>
    <TextInput  
    style={style.input}
    onChangeText={lastName => setUser({...user, lastName})}
    placeholder="Sobre nome"
    value={user.lastname}
    />
    <Button 
      title="Salvar"
      onPress={() =>{
        navigation.goBack()
      }}
    />
  </View>
  )
};

const style = StyleSheet.create({

  form:{
    padding: 12
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWith: 1,
    marginBottom: 15,
  }
})


export default UserForm;
