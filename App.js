import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View, Math, ScrollView, TextInput, Image } from 'react-native';

let i = 0
let email, pass

const FlatListBasics = () => {
  console.log('re-render ' + (++i))
  const [listNV, setListNV] = useState([
    { name: 'Devin', phone: 113 },
    { name: 'Dan', phone: 114 },
    { name: 'Dominic', phone: 113 },
    { name: 'Jackson', phone: 115 },
    { name: 'James', phone: 113 },
    { name: 'Joel', phone: 112 },
    { name: 'John', phone: 113 },
    { name: 'Jillian', phone: 115 },
    { name: 'Jimmy', phone: 113 },
    { name: 'Julie', phone: 911 },

  ]);
  //var [email, onChangeEmail] = React.useState('');
  //var [pass, onChangePass] = React.useState('');
  return (
    <ScrollView>
  

        <FlatList style={styles.container}
          data={listNV}
          extraData={listNV}
          renderItem={({ item }) =>
            < TouchableOpacity onPress={() => {
              alert(item.name + '--' + item.phone)
            }}>
              <View style={{ flexDirection: 'row', backgroundColor: 'yellow' }}><Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.phone}</Text>
              </View>
            </TouchableOpacity>
          }

        />

        <View style={{ flexDirection: 'row', height: '10%', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 50 }}>
          <Button title='Add' onPress={() => {
            listNV.push({ name: 'khai', phone: 111 })
            setListNV([...listNV]);
          }} />
          <Button title='Delete'
            onPress={() => {
              listNV.splice(0, 1);
              setListNV([...listNV])
            }} />
        </View>
        <TextInput
          style={styles.input}
          placeholder='nhap email'
          onChangeText={(value) => {
            email = value
          }}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            pass = value
          }}
          value={pass}
          placeholder='passWord'
          secureTextEntry={true}
        />
        <View style={{ marginHorizontal: 120, }}>
          <Button
            title='Submit'
            onPress={() => {

              alert('Email: ' + email + '\nPass:' + pass)
              pass = '', email = ''
            }} />
        </View>
        <View style={{flexDirection:'row',margin:20,justifyContent:'space-around'}}>
        <Image style={{ width: 200, height: 330 }}
          source={require('./img/img2.png')} />
        <Image style={{ width: 50, height: 50 }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        /></View>

     
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 'auto',
    marginTop: 20,
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default FlatListBasics;