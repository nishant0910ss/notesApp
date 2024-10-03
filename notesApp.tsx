import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EmptyList from './components/emptyList';

function NotesApp() {
  const [note, setNote] = useState('');
  const [notesList, setNotesList] = useState([]);
  const [id, setId] = useState(1);
  const [updatedNote, setUpdatedNote] = useState(null);
  const [alertTextStyle, setAlertTextStyle] = useState(styles.alertTextNormal);

  const handleAddNote = () => {
    if (note.trim()) {
      setAlertTextStyle(styles.alertTextNormal);
      if (updatedNote) {
        const updatedList = notesList.map(item =>
          item.id === updatedNote.id ? {...item, content: note} : item,
        );
        setNotesList(updatedList);
        setUpdatedNote(null);
      } else {
        setNotesList([...notesList, {id: id, content: note}]);
        setId(id + 1);
      }
      setNote('');
    } else {
      // Alert.alert('Warning', 'Please enter note text');
      setAlertTextStyle(styles.alertTextWarning);
    }
  };

  const handleDeleteNote = id => {
    setAlertTextStyle(styles.alertTextNormal);
    const updatedNotesList = notesList.filter(note => note.id !== id);
    setNotesList(updatedNotesList);
  };

  const handleUpdateNote = item => {
    setAlertTextStyle(styles.alertTextNormal);
    setUpdatedNote(item);
    setNote(item.content);
  };

  const renderNotes = ({item}) => {
    return (
      <ScrollView>
        <View style={styles.noteTab}>
          <Text style={styles.noteText}>{item.content}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => handleUpdateNote(item)}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteNote(item.id)}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notes App</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Enter a new note"
        placeholderTextColor="#999"
        value={note}
        onChangeText={text => setNote(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNote}>
        <Text style={styles.buttonText}>
          {updatedNote ? 'Save' : 'Add Note'}
        </Text>
      </TouchableOpacity>
      <Text style={alertTextStyle}>Please enter your note First!!!</Text>
      {notesList.length <= 0 && <EmptyList />}
      <FlatList data={notesList} renderItem={renderNotes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // backgroundColor: 'black',
    paddingTop: 50,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputBox: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  noteTab: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'column',
  },
  noteText: {
    color: '#00796b',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 10,
    marginBottom: 5,
  },
  updateButton: {
    backgroundColor: '#ffa726',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 5,
  },
  alertTextNormal: {
    display: 'none',
  },
  alertTextWarning: {
    display: 'flex',
    color: 'red',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default NotesApp;
