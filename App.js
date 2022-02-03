import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Appbar, Subheading, TextInput, Title} from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters';

import Markdown from 'react-native-markdown-display';

const dummy = `
# And you're looking at 2
## And you're looking at 2
`

class MarkdownPreviewer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text: dummy,
      markdown: '',
    }
  }

  componentDidMount () {
    console.log(this.state.text);
    console.log("TextInput", this.textInput)
  }

  header = () => {
  const headerStyles = [styles.header];

  const h1 = '#';
  const h2 = '##';
  const h3 = '###';
  const h4 = '####';
  const h5 = '#####';
  const h6 = '######';

  const headers = [h1, h2, h3, h4, h5, h6];

  const x = headers.filter(word => word.length == 1);
  console.log(x, 'instance 2');

  if (this.state.text.includes(h1) && headers.filter(word => word.length == 1)){
    headerStyles.push(styles.h1);
    this.setState({
      markdown: this.state.text.replace('#', '')
    })
  } else if (this.state.text.includes(h2) && headers.filter(word => word.length == 2)) {
    headerStyles.push(styles.h2);
    this.setState({
      markdown: this.state.text.replace('##', '')
    })
  }
  }

  mdSyntaxParser = () => {
    this.header()
  }

  // preview = () => {
  //   this.setState({
  //     markdown: this.state.text.trimStart('#')
  //   })
  // }

  clearEditor = () => {
    this.setState({
      text: '',
      markdown: ''
    })
  }

  render(){

  const headerStyles = [styles.header]
    
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        hidden={false}
        translucent={true}
        showHideTransition={'fade'}
        barStyle={'dark-content'}
        backgroundColor={'#add8e6'}
      />
      <Appbar.Header style={{
        top: moderateScale(40),
        marginBottom: moderateScale(40),
        backgroundColor: '#add8e6'}}>
      <Title style={{
        left: moderateScale(90),
        }}>Markdown Engine</Title>
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
             ref={(ref) => this.textInput = ref}
             underlineColor={'white'}
             multiline={true}
             mode='outlined'
             label="Markdown Editor"
             value={this.state.text}
             onChangeText={text => this.setState({text: text})}
             onKeyPress={()=>{}}
           />

           <View style={{
             flexDirection: 'row', 
             justifyContent: 'space-between', 
             marginTop: moderateScale(10)
             }}>
             <TouchableOpacity
             style={{
               width: moderateScale(100),
               height: moderateScale(25),
               borderRadius: moderateScale(3),
               borderWidth: moderateScale(1),
               backgroundColor: '#de8028',
               borderColor: '#de8028',
               justifyContent: 'center'
             }}
             onPress={()=>{this.clearEditor()}}>
               <Text style={{textAlign: 'center', color: 'white'}}>Clear Editor</Text>
             </TouchableOpacity>

             <TouchableOpacity
             style={{
               width: moderateScale(100),
               height: moderateScale(25),
               borderRadius: moderateScale(3),
               borderWidth: moderateScale(1),
               backgroundColor: '#21ad8d',
               borderColor: '#2db8c4',
               justifyContent: 'center'
             }}
             onPress={()=>{this.mdSyntaxParser()}}>
               <Text style={{textAlign: 'center', color: 'white'}}>Preview</Text>
             </TouchableOpacity>
           </View>
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
            backgroundColor: '#f6f6f6',
            marginTop: moderateScale(20),
            marginBottom: moderateScale(20),
            width: '100%',
            borderWidth: moderateScale(.9),
            borderColor: 'grey',
            minHeight: moderateScale(200),
            borderRadius: moderateScale(5)
          }}>
            <View style={{
              marginTop: moderateScale(20), 
              width: '95%', 
              alignSelf: 'center',
              marginBottom: moderateScale(10)
              }}>
                <Text style={headerStyles}>
                  {this.state.markdown}
                </Text>
            </View>
          </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  }
};

export default MarkdownPreviewer;

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
  header: {
    fontWeight: 'bold',
  },
  h1: {
    color: 'pink',
    fontWeight: 'bold',
    fontSize: moderateScale(40)
  },
  h2: {
    fontWeight: 'bold',
    fontSize: moderateScale(15)
  },
});
