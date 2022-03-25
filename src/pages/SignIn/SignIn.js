import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'


export default function SignIn() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const efetuaLogin = () => {
        if (email != '' && password != '') {
            alert('SEJA BEM VINDO!');
            navigation.reset({
                routes: [{ name: 'Home' }]
            });
        } else {
            alert('PREENCHA OS DADOS!');
        }
    }

    return (
        <View style={styles.container} >
            <Animatable.View animation='fadeInLeft' delay={600} >
                <View style={styles.header} >
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#fff' }} > SEJA BEM VINDO!</Text>
                </View>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' >

                <Text style={styles.title} >EMAIL</Text>
                <TextInput
                    style={styles.input}
                    placeholder="DIGITE SEU NOME"
                    onChangeText={text => setEmail(text)}
                />

                <Text style={styles.title} >SENHA</Text>
                <TextInput
                    style={styles.input}
                    placeholder="DIGITE SUA SENHA"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={efetuaLogin} >
                    <Text style={styles.textButton}>ENTRAR</Text>
                </TouchableOpacity>

                <Animatable.View animation="flipInY" delay={600}  >
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.register} >
                        <Text style={styles.textRegister} >NÃO POSSUI UMA CONTA? CADASTRE-SE JÁ!</Text>
                    </TouchableOpacity>
                </Animatable.View>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38A69D',
    },
    header: {
        marginTop: '20%',
        alignItems: 'center',
    },
    title: {
        marginTop: '10%',
        marginLeft: '8%',
        fontSize: 22,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        height: 45,
        paddingLeft: 10,
        marginTop: 20,
        marginLeft: 19,
        borderRadius: 40,
    },
    button: {
        width: '65%',
        backgroundColor: '#fff',
        height: 45,
        marginTop: 60,
        marginLeft: '17.5%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    register: {
        marginTop: 35,
        alignItems: 'center',
    },
    textRegister: {
        color: '#fff',
    },
})

/*export default function SignIn() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.header} >
                <Text style={styles.message} >Bem Vindo(a)</Text>
            </Animatable.View>


            <KeyboardAvoidingView behavior='padding' style={styles.behavior} >
                <Animatable.View animation="fadeInUp" style={styles.form} onPress={Keyboard.dismiss}  >

                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        placeholder='Digite seu email'
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />

                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        placeholder='Digite sua senha'
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.textButton}>ENTRAR</Text>
                    </TouchableOpacity>

                    <Animatable.View animation="flipInY" delay={600} >
                        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('SignUp')} >
                            <Text style={styles.buttonRegister} >NÃO POSSUI UMA CONTA? CADASTRE-SE!</Text>
                        </TouchableOpacity>
                    </Animatable.View>

                </Animatable.View>
            </KeyboardAvoidingView>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38A69D',
    },
    behavior: {
        flex: 1,
        marginBottom: 20,
    },
    header: {
        marginTop: '25%',
        marginBottom: '8%',
        paddingStart: '8%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    form: {
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 10,
    },
    input: {
        height: '11%',
        backgroundColor: "#fff",
        margin: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingLeft: 10,
    },
    button: {
        height: 50,
        margin: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    register: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRegister: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
});*/