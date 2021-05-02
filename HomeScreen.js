import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import dictionary from './database'

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      definition: '',
      lexicalCategory: '',
      text: '',
      isSearchedPressed: false
    };
  }

  getWord = (text1) => {
    var text = text1.toLowerCase().trim();
    try {
      var word = dictionary[text]["word"];
      var lexicalCategory = dictionary[text]["lexicalCategory"];
      var definition = dictionary[text]["definition"];
      this.setState({
        word: word,
        lexicalCategory: lexicalCategory,
        definition: definition,
      });
    }
    catch (err) {
      alert("Sorry, This word is not available for now")
      this.setState({
        'text': '',
        'isSearchPressed': false,
        'word':''
      })
    }
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchedPressed: false,
              lexicalCategory: '',
              definition: '',
              word:''
            });
          }}
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ isSearchedPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.textIn}> search </Text>{' '}
        </TouchableOpacity>

        <Text style={styles.textOutput1}>{this.state.word}</Text>
        <Text style={styles.textOutput2}>{this.state.definition}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 50,
    width: '60%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'black',
    fontFamily: 'monospace',
    fontSize: 20
  },
  searchButton: {
    width: '20%',
    height: 50,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'black',
    backgroundColor: 'white'
    
  },
  textIn: {
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  textOutput1: {
    textAlign: 'left',
    fontFamily: 'monospace',
    fontSize: 23,

    fontStyle: 'bold'
  },
  textOutput2: {
    textAlign: 'left',
    fontFamily: 'monospace',
    fontSize: 18,
  }
});
