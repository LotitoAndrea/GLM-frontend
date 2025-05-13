import { Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomButton from '@/components/custom-button';

const Login = () => {
    return (
        <ImageBackground
            source={require('@/assets/backgrounds/background1.jpg')}
            className="flex-1 justify-center items-center px-6"
            resizeMode="cover"
        >
            {/* Titolo */}
            <Text className="text-white text-4xl font-bold mb-2">GLM Club</Text>
            <Text className="text-white text-base mb-8">Registrati o accedi al tuo account</Text>

            {/* Pulsanti */}
            <CustomButton
                title="Continua con Google"
                className="bg-white px-4 py-3 mb-4"
                IconLeft={
                    <Image
                        source={require('@/assets/icons/google.png')}
                        className="w-5 h-5"
                        resizeMode="contain"
                    />
                }
                onPress={() => {}}
                textStyle="text-black"
            />

            <CustomButton
                title="Continua con Facebook"
                className="bg-white px-4 py-3 mb-4"
                IconLeft={
                    <Image
                        source={require('@/assets/icons/facebook.png')}
                        className="w-5 h-5"
                        resizeMode="contain"
                    />
                }
                onPress={() => {}}
                textStyle="text-black"
            />

            <CustomButton
                title="Continua con l’email"
                className="bg-white px-4 py-3"
                IconLeft={
                    <Image
                        source={require('@/assets/icons/email.png')}
                        className="w-5 h-5"
                        resizeMode="contain"
                    />
                }
                onPress={() => {}}
                textStyle="text-black"
            />

            {/* Link in basso */}
            <TouchableOpacity className="mt-10" onPress={() => {}}>
                <Text className="text-white">
                    Non hai un account? <Text className="underline">Crea un account</Text>
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default Login;
