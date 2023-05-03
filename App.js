import React, {Component} from "react";
import { View, Text, Image, StyleSheet, TextInput, Button } from "react-native";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {

      frase: '',
      img: require('./img/biscoito.png')
    };
    
    this.frases = ['O cadu é foda!', 'O Yuri é foda!', 'O Vitor é foda!', 'O matheus é foda!', 'O Alex é foda!', 'O Wiliam é foda!']

    this.quebrarbiscoito = this.quebrarbiscoito.bind(this);

  }
  
  quebrarbiscoito(){
    let sortearNum = Math.floor(Math.random() * this.frases.length)

    this.setState({frase: '" '+ this.frases[sortearNum] + ' "',
      img: require('./img/biscoitoAberto.png')              
    })
  }

  render(){
    return(
      <View style={styles.container}>

          <Image 
            source={this.state.img}
            style={styles.img}  
          />
          
          <Text style={styles.Texto}>{this.state.frase}</Text>

          <Button 
            title="Quebrar Biscoito"
            onPress={this.quebrarbiscoito}
          />

      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    fontSize: 20,
    padding: 5,
  },

  Texto:{

    color: '#dd7b22',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 50,
    marginTop: 50,
    fontStyle: 'italic'
  },

  img:{
    width: 300,
    height: 300,
    textAlign: 'center'
  },


});
