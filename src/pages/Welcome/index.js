import React from'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function Welcome(){
const navigation = useNavigation();

    return(
        <View style={Style.container}>
            <View style={Style.containerLogo}>
                <Animatable.Image
                animation='flipInY'
                    source={require('../../../assets/lobo.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"

                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={Style.conatinerForm}>
                <Text style={Style.title}>Assista seus filmes de qualqer lugar!</Text>
                <Text style={Style.text}>Faça o login para começar</Text>
                <TouchableOpacity
                 style={Style.button}
                 onPress={() =>  navigation.navigate('SingIn')}
                 >
                    <Text style={Style.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}


const Style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
      
    },
    containerLogo:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    conatinerForm:{
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    title:{
        fontSize:24,
        marginTop: 28,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    }
})