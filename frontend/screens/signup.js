import React from 'react';
import { StyleSheet,Text, TextInput, View, Button,Image} from 'react-native';
import {Input} from 'react-native-elements';

const signup = () => {
    return (
       <View style={styles.container}>
           <Text style={styles.text}>Pour t'inscrire, on a besoin de quelques informations :</Text>
            <Input containerStyle={styles.input} type="text" name='firstnameup' placeholder="Prenom"/>
            <Input containerStyle={styles.input} type="text" name='emailup' placeholder="Email"/>
            <Input containerStyle={styles.input} type="text" name='passwordup' placeholder="Password"/>
            <Input containerStyle={styles.input} type="text" name='confirmPasswordup' placeholder="confirmez le password"/>
           <Button color='#2c6e49' title="inscription"/>
       </View>
    );
};

const styles = StyleSheet.create({
    button:{
        marginTop: 15,
    },
    image:{
        width: '100%',
        resizeMode: 'contain',
    },
    text:{
        fontSize: 25,
        textAlign:'center',
        marginBottom: 50,
        
    },
    input:{
        backgroundColor:'rgba(44, 110, 73, 0.4)',
        margin: 15,
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

export default signup;