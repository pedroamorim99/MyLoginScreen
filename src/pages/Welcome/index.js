import React from 'react';
import * as Animatable from 'react-native-animatable'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container} >

            <View style={styles.logo} >
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../images/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.form} >
                <Text style={styles.title} >Monitore e organize seus gastos de qualquer lugar!</Text>
                <Text style={styles.subtitle} >Faça o login para começar:</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')} >
                    <Text style={styles.textButton}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38A69D',
    },
    logo: {
        flex: 2,
        backgroundColor: '#38A69D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        flex: 1,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    subtitle: {
        color: '#a1a1a1',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38A69D',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    }
})