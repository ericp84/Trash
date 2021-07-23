import React from 'react';
import { StyleSheet,Text, TextInput, View, Button,Image} from 'react-native';
import {Input} from 'react-native-elements';

const login = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('./Geotrash.png')}/>
            <Input containerStyle={styles.input} type="text" name='email' placeholder="Email"/>
            <Input containerStyle={styles.input} type="text" name='password' placeholder="Password"/>
            <Button 
           title="connexion"
           color='rgba(44, 110, 73, 100)'
           onPress={() => props.navigation.navigate('BottomNavigator', {screen: 'home'})}
            />   
            
                <Text>Vous n'avez pas de compte,  <Text style={{color:'#2c6e49'}}onPress={() =>{console.log("click ok")}}>Créer un compte</Text></Text>
                
            
        </View>
         
    );
};

const styles = StyleSheet.create({
    image:{
        width: '100%',
        resizeMode: 'contain',
    },
    text:{
        marginTop: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    input:{
        backgroundColor:'rgba(44, 110, 73, 0.4)',
        margin: 10,
        width:'80%',
        borderRadius: 15,
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffF'
    }


})

export default login;