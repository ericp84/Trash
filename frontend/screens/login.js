import React from 'react';
import { StyleSheet,Text, TextInput, View, Button,Image} from 'react-native';
import {Input} from 'react-native-elements';

const login = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('./Geotrash.png')}/>
            <Input containerStyle={styles.input} type="text" placeholder="Email"/>
            <Input containerStyle={styles.input} type="text" placeholder="Password"/>
            <Button 
           title="connexion"
           color='rgba(44, 110, 73, 100)'
           onPress={() => props.navigation.navigate('BottomNavigator', {screen: 'home'})}
            />   
            <View style={styles.text}>
                <Text>Vous n'avez pas de compte, Créer un compte</Text> 
            </View>
        </View>
         
    );
};

const styles = StyleSheet.create({
    image:{
        width: 350,
        resizeMode: 'contain'
        
    },
    text:{
        marginTop: 50,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    input:{
        backgroundColor:'rgba(44, 110, 73, 0.4)',
        marginBottom: 25, 
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