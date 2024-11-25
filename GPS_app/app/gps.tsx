import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import MostrarMapa from '@/components/MostrarMapa';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <MostrarMapa />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});