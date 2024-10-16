import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity ,  } from 'react-native';
import Card from './components/Card/Card'
import styles from './components/Card/card_styles'
function App() {
  return (
    <View style={styles.container} >
     <Card 
     title="Eleanor Roosevelt" 
     text="Yesterday is history, tomorrow is unknown, today is a gift Quotes about living in the moment"
     />

      <Card 
      title="Shakespeare" 
      text="To be or not to be: that is the question"
      />

      <Card 
      title="Benjamin Franklin" 
      text="Anyone who decides to correct her mistakes from now on has decided not to correct them now."
      />
      
    </View>

  );
}


export default App;