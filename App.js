import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View, Math, ScrollView, TextInput } from 'react-native';

const FlatListBasics = () => {
  const [listNV, setListNV] = useState([
    { key: 'Devin', phone: 113 },
    { key: 'Dan', phone: 114 },
    { key: 'Dominic', phone: 113 },
    { key: 'Jackson', phone: 115 },
    { key: 'James', phone: 113 },
    { key: 'Joel', phone: 112 },
    { key: 'John', phone: 113 },
    { key: 'Jillian', phone: 115 },
    { key: 'Jimmy', phone: 113 },
    { key: 'Julie', phone: 911 },

  ]);
  const [email, onChangeEmail] = React.useState('');
  const [pass, onChangePass] = React.useState('');
  return (
    <SafeAreaView >

      <FlatList style={styles.container}
        data={listNV}
        extraData={listNV}
        renderItem={({ item }) =>
          < TouchableOpacity onPress={() => {
            alert(item.key + '--' + item.phone)
          }}>
            <View style={{ flexDirection: 'row', backgroundColor: 'yellow' }}><Text style={styles.item}>{item.key}</Text>
              <Text style={styles.item}>{item.phone}</Text>
            </View>
          </TouchableOpacity>
        }

      />

      <View style={{ flexDirection: 'row', height: '10%', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 50 }}>
        <Button title='Add' onPress={() => {
          listNV.push({ key: 'khai', phone: 111 })
          setListNV(listNV);
        }} />
        <Button title='Delete'
          onPress={() => {
            listNV.splice(0, 1);
            setListNV(listNV)
          }} />
      </View>
      <TextInput
        style={styles.input}
        placeholder='nhap email'
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
        placeholder='passWord'
        secureTextEntry={true}
      />
      <View style={{ marginHorizontal: 120, }}>
        <Button
          title='Submit'
          onPress={() => {
            alert('Email: ' + email + '\nPass:' + pass)
            onChangeEmail(''),onChangePass('')
          }} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '50%',
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

