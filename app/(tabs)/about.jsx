import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function TabThreeScreen  () {
  const data = [
    { id: 1, image: 'https://bootdey.com/img/Content/avatar/avatar6.png', username: 'johndoe1' },
    { id: 2, image: 'https://bootdey.com/img/Content/avatar/avatar2.png', username: 'johndoe2' },
    { id: 3, image: 'https://bootdey.com/img/Content/avatar/avatar3.png', username: 'johndoe3' },
    { id: 4, image: 'https://bootdey.com/img/Content/avatar/avatar4.png', username: 'johndoe4' },
    { id: 5, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', username: 'johndoe5' },
    { id: 6, image: 'https://bootdey.com/img/Content/avatar/avatar6.png', username: 'johndoe6' },
    { id: 7, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', username: 'johndoe7' },
    { id: 8, image: 'https://bootdey.com/img/Content/avatar/avatar2.png', username: 'johndoe8' },
    { id: 9, image: 'https://bootdey.com/img/Content/avatar/avatar6.png', username: 'johndoe2' },
    { id: 10, image: 'https://bootdey.com/img/Content/avatar/avatar6.png', username: 'johndoe1' },
    { id: 11, image: 'https://bootdey.com/img/Content/avatar/avatar2.png', username: 'johndoe2' },
    { id: 12, image: 'https://bootdey.com/img/Content/avatar/avatar3.png', username: 'johndoe3' },
  ]

  const [users, setUsers] = useState(data)
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          enableEmptySections={true}
          data={users}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <Text style={styles.username}>{item.username}</Text>
                  <View style={styles.iconContent}>
                    <Image
                      style={styles.icon}
                      source={{ uri: 'https://img.icons8.com/color/70/000000/plus.png' }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ECF0F1',
      },
  image: {
    width: 60,
    height: 60,
  },
  body: {
    backgroundColor: '#E6E6FA',
  },
  box: {
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  username: {
    color: '#20B2AA',
    fontSize: 22,
    alignSelf: 'center',
    marginLeft: 10,
  },
  iconContent: {
    width: 60,
    height: 60,
    backgroundColor: '#40E0D0',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
})
