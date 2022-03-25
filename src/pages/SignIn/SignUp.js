import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SignUp() {

    const navigation = useNavigation();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const efetuaCadastro = () => {
        if (user != '' && email != '' && password != '') {
            alert('CADASTRO CONCLÚIDO COM SUCESSO!');
            navigation.navigate('SignIn')
        } else {
            alert('PREENCHA OS DADOS!');
        }
    }

    return (
        <View style={styles.container} >

            <Animatable.View animation="fadeInDown" delay={200} style={styles.header} >
                <Text style={styles.message} >CADASTRE-SE</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' delay={200} style={styles.form} >
                <Text style={styles.title} >NOME DE USUÁRIO</Text>
                <TextInput
                    style={styles.input}
                    placeholder="DIGITE SEU USER"
                    onChangeText={text => setUser(text)}
                />

                <Text style={styles.title} >EMAIL</Text>
                <TextInput
                    style={styles.input}
                    placeholder="DIGITE SEU EMAIL"
                    onChangeText={text => setEmail(text)}
                />

                <Text style={styles.title} >SENHA</Text>
                <TextInput
                    style={styles.input}
                    placeholder="DIGITE SUA SENHA"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={efetuaCadastro}>
                    <Text style={styles.textButton}>CADASTRAR</Text>
                </TouchableOpacity>

                <Animatable.View animation="flipInY" delay={600}  >
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.register} >
                        <Text style={styles.textRegister} >FAZER LOGIN</Text>
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
        marginTop: '18%',
        paddingStart: '8%',
        paddingEnd: '7%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    },
    form: {
        marginTop: '8%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '8%',
    },
    input: {
        height: 38,
        backgroundColor: '#fff',
        margin: 28,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingLeft: 10,
        borderRadius: 30,
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
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    register: {
        marginBottom: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textRegister: {
        marginBottom: '10%',
        color: '#fff',
    }
});