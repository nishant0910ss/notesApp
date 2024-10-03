import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import NotesApp from './notesApp';

function App() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <NotesApp />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
