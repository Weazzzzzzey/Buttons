import React , {useState} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Button, Text, View, SafeAreaView, Alert, TextBase, TextInput } from 'react-native';



export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      color1: 'white',
      color2: 'white',
      color3: 'white',
      color4: 'white'
    };
  }

  ChangeColorFun=(c)=>{
    
    if(c == 1)
    if(this.state.color1 == 'white')
    this.setState({color1 : 'blue'})
    else
    this.setState({color1 : 'white'})

    if(c == 2)
    if(this.state.color2 == 'white')
    this.setState({color2 : 'gold'})
    else
    this.setState({color2 : 'white'})

    if(c == 3)
    if(this.state.color3 == 'white')
    this.setState({color3 : 'red'})
    else
    this.setState({color3 : 'white'})

    if(c == 4)
    if(this.state.color4 == 'white') 
    this.setState({color4 : 'green'})
    else
    this.setState({color4 : 'white'})

  }

  render() {

    return (
      <View style = {styles.container}>
      
          <View style= {{
            flex: 1,
            flexDirection: "row"
            
          }}>
          <View style= {styles.tomato}>
            <Button
            title= "Blue"
            color= 'blue'
            onPress={() => {
              this.ChangeColorFun(1);
            }}
            />
          </View>

          <View style= {styles.gold}>
            <Button
            title= "Gold"
            color= 'orange'
            onPress={() => {
              this.ChangeColorFun(2);
            }}
            />
          </View>
      
      </View>
      
        <View style= {{
              flex: 1,
              flexDirection: "row"
              
            }}>
            <View style= {styles.gold}>
              <Button 
              title= "Red"
              color= 'red'
              onPress={() => {
                this.ChangeColorFun(3);
              }}  
              />
            </View>

            <View style= {styles.tomato}>
                <Button 
                title= "Green"
                color= 'green'
                onPress={() => {
                  this.ChangeColorFun(4);
                }} 
                />
            </View>
        </View>

        <View style= {styles.down}>
            <View style = {styles.tekstas}>
              <Text style ={{fontSize: 20, fontWeight: "bold", textAlign: "center", color: this.state.color1}}>Blue Color</Text>
            </View>
            <View style = {styles.tekstas}>
              <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center", color: this.state.color2}}>Gold Color</Text>
            </View>
            <View style = {styles.tekstas}>
              <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center", color: this.state.color3}}>Red Color</Text>
            </View>
            <View style = {styles.tekstas}>
              <Text style={{fontSize: 20, fontWeight: "bold", textAlign: "center", color: this.state.color4}}>Green Color</Text>
            </View>
        </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  tomato:{
    backgroundColor: "tomato",
    flex: 1,
    justifyContent: "center"
  },
  gold:{
    backgroundColor: "gold",
    flex: 1,
    justifyContent: "center"
  },
  down:{
    backgroundColor: "black",
    flex: 2,
    flexDirection: "column",
  },
  tekstas:{
    flex: 1,
    justifyContent: "center",
    
  },

  startupas:{
    
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

});
  

   
