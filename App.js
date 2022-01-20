import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Appbar, Subheading, TextInput, Title} from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters';

class Markdown extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text: ''
    }
  }

  render(){
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        hidden={false}
        translucent={true}
        showHideTransition={'fade'}
        barStyle={'dark-content'}
        backgroundColor={'#add8e6'}
      />
      <Appbar.Header style={{backgroundColor: '#add8e6'}}>
      <Title style={{
        marginTop: moderateScale(20),
        left: moderateScale(90)}}>Markdown Engine</Title>
      </Appbar.Header>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            flex: 1,
            marginTop: moderateScale(15),
            width: '95%',
            alignSelf: 'center'
          }}>
          <View style={{
            flex: 2
          }}>
          <TextInput
             multiline={true}
             mode='outlined'
             label="Markdown Editor"
             value={this.state.text}
             onChangeText={text => this.setState({text: text})}
             onKeyPress={()=>{}}
           />
          </View>
          <View style={{
            marginTop: moderateScale(20),
            flex: 1
          }}>
          <Subheading>Markdown Previewer</Subheading>
          <View style={{
            width: '100%',
            borderWidth: moderateScale(.5),
            borderColor: 'purple'
          }}/>
          <View style={{
            marginTop: moderateScale(20),
            marginBottom: moderateScale(20),
            width: '100%',
            borderWidth: moderateScale(.9),
            borderColor: 'grey',
            height: moderateScale(400),
            borderRadius: moderateScale(5)
          }}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  }
};

export default Markdown;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
