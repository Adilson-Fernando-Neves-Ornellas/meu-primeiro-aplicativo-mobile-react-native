import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import styles from './HomeStyle';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text >Hello Adilson</Text>
      <StatusBar style="auto" />
    </View>
  );
}


