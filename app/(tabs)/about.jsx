import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function TabThreeScreen  () {
  const data = [
    { id: 1, image: 'https://images.app.goo.gl/tPpEtAhKyzDuT1W2A.png',    username: 'C-47' },
    { id: 2, image: 'https://bootdey.com/img/Content/avatar/avatar2.png', username: 'Boeing720' },
    { id: 3, image: 'https://bootdey.com/img/Content/avatar/avatar3.png', username: 'Boeing727' },
    { id: 5, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', username: 'Boeing737' },
    { id: 6, image: 'https://bootdey.com/img/Content/avatar/avatar6.png', username: 'boeing757' },
    { id: 7, image: 'https://bootdey.com/img/Content/avatar/avatar1.png', username: 'Boeing767' },
    { id: 8, image: 'https://bootdey.com/img/Content/avatar/avatar2.png', username: 'Boeing777' },
    { id: 9, image: 'https://bootdey.com/img/Content/avatar/avatar6.png', username: 'Boeing787' },
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
        justifyContent: 'left',
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
