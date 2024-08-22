import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/c47.jpg')}
          style={{width:'110%', height: '110%', left: -25}}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">ET & BOEING</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ethiopian Airlines</ThemedText>
        <ThemedText>
        Ethiopian Airlines was founded on 21 December 1945 and commenced operations on 8 April 1946, expanding to international flights in 1951. The firm became a share company in 1965 and changed its name from Ethiopian Air Lines to Ethiopian Airlines. <ThemedText type="defaultSemiBold"></ThemedText> 
          
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Boeing</ThemedText>
        <ThemedText>
        Boeing is an American multinational corporation that designs, manufactures, and sells airplanes, rotorcraft, rockets, satellites, and missiles worldwide. The company also provides leasing and product support services. Founded by William Boeing in Seattle, Washington, on July 15, 1916, Boeing is now headquartered in Arlington County, Virginia.

        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ethiopian Airlines and Boeing</ThemedText>
        <ThemedText>
        Ethiopian Airlines and Boeing have a long-standing relationship that dates back several decades. Ethiopian Airlines was one of the first African airlines to order the Boeing 737 aircraft in the 1980s, and since then, the two companies have worked closely together.

          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'cohin',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
