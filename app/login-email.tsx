import React, { useState } from 'react';
import { Text, TextInput, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import CustomButton from '@/components/custom-button';

const LoginEmail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const isEmailValid = (email: string) => {
        return email.includes('@') && email.includes('.');
    };

    const isPasswordValid = (password: string) => {
        return (
            password.length >= 7 &&
            /[A-Z]/.test(password) &&           // almeno una maiuscola
            /[0-9]/.test(password) &&           // almeno un numero
            /[!@#$%^&*(),.?":{}|<>]/.test(password) // almeno un simbolo speciale
        );
    };

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Errore', 'Per favore, inserisci email e password.');
            return;
        }

        if (!isEmailValid(email)) {
            Alert.alert('Email non valida', 'L\'email deve contenere "@" e "."');
            return;
        }

        if (!isPasswordValid(password)) {
            Alert.alert(
                'Password non valida',
                'La password deve contenere almeno 7 caratteri, una lettera maiuscola, un numero e un simbolo speciale.'
            );
            return;
        }

        setLoading(true);

        // Simula login
        setTimeout(() => {
            setLoading(false);
            Alert.alert('Login effettuato!', `Benvenuto, ${email}`);
            console.log('LOGIN:', { email, password });
        }, 1500);
    };

    return (
        <ImageBackground
            source={require('@/assets/backgrounds/background1.jpg')}
            className="flex-1 justify-center items-center px-6"
            resizeMode="cover"
        >
            <Text className="text-white font-extrabold text-4xl mb-2 font-heading" style={{ textShadowColor: '#000', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4 }}>
                GLM Club
            </Text>
            <Text className="text-white text-base mb-8 font-body" style={{ textShadowColor: '#000', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4 }}>
                Accedi usando la tua email
            </Text>

            <TextInput
                placeholder="inserisci la tua email..."
                placeholderTextColor="#666"
                className="bg-white w-full rounded-xl px-4 py-3 mb-4"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                placeholder="inserisci la tua password..."
                placeholderTextColor="#666"
                className="bg-white w-full rounded-xl px-4 py-3 mb-2"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity className="self-start mb-6">
                <Text className="text-white italic font-medium" style={{ textShadowColor: '#000', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4 }}>
                    Non ricordi la password? <Text className="font-bold underline">Password dimenticata</Text>
                </Text>
            </TouchableOpacity>

            <CustomButton
                title={loading ? 'Caricamento...' : 'Accedi'}
                className={`bg-blue-400 px-4 py-3 mb-5 ${loading ? 'opacity-50' : ''}`}
                textStyle="text-white"
                onPress={handleLogin}
                disabled={loading}
            />

            <TouchableOpacity>
                <Text className="text-white" style={{ textShadowColor: '#000', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4 }}>
                    Non hai un account? <Text className="underline font-semibold italic">Crea il tuo account!</Text>
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default LoginEmail;
