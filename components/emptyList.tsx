import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

function EmptyList() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('D:/NISHANT Documents/React_Native/todoApp/assets/add.png')}
      />
      <Text style={styles.emptyText}>Add your Notes here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  emptyText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default EmptyList;
