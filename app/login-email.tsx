import React, { useState } from 'react';
import { Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import CustomButton from '@/components/custom-button';

const LoginEmail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ImageBackground
            source={require('@/assets/backgrounds/background1.jpg')}
            className="flex-1 justify-center items-center px-6"
            resizeMode="cover"
        >
            {/* Titolo */}
            <Text className="text-white font-extrabold text-4xl mb-2 font-heading" style={{ textShadowColor: '#000', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4 }}>
                GLM Club
            </Text>
            <Text className="text-white text-base mb-8 font-body" style={{ textShadowColor: '#000', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4 }}>
                Accedi usando la tua email
            </Text>

            {/* Email */}
            <TextInput
                placeholder="inserisci la tua email..."
                placeholderTextColor="#666"
                className="bg-white w-full rounded-xl px-4 py-3 mb-4"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* Password */}
            <TextInput
                placeholder="inserisci la tua password..."
                placeholderTextColor="#666"
                className="bg-white w-full rounded-xl px-4 py-3 mb-2"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            {/* Password dimenticata */}
            <TouchableOpacity className="self-start mb-6">
                <Text className="text-white italic font-medium" style={{ textShadowColor: '#000', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4 }}>
                    Non ricordi la password? <Text className="font-bold underline">Password dimenticata</Text>
                </Text>
            </TouchableOpacity>

            {/* Bottone Accedi */}
            <CustomButton
                title="Accedi"
                className="bg-white px-4 py-3 w-full mb-10 text-center"
                textStyle="text-gray-500 text-lg text-center"
                onPress={() => {
                    // later: logica di accesso
                    if (!email || !password)
                        {
                            alert('Per favore, inserisci email e password.');
                        }
                    else
                        {
                            console.log('Login con email:', email, password);
                            alert('Login effettuato con successo!');
                        }
                    }
                }
            />

            {/* Crea account */}
            <TouchableOpacity>
                <Text className="text-white" style={{ textShadowColor: '#000', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4 }}>
                    Non hai un account? <Text className="underline font-semibold italic">Crea il tuo account!</Text>
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default LoginEmail;
