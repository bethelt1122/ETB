import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Platform } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Collapsible } from '@/components/Collapsible';
import { ThemedText } from '@/components/ThemedText';
import { ExternalLink } from '@/components/ExternalLink';

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
    <ScrollView >
    <View style={styles.container}>
      <View style={styles.body}>
      <Collapsible  title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
          to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
  image: {
    width: 60,
    height: 60,
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
  coll:{
    fontSize:40,
  }
})
