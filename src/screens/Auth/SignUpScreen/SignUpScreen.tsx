import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();

    const onRegisterPressed = async (data) => {
        const { name, email, password } = data;
        try {
            // sign up

            navigation.navigate('SignIn');
        } catch (e) {
            Alert.alert('Oops', (e as Error).message);
        }
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <CustomInput
                    name='firstName'
                    control={control}
                    placeholder='First Name'
                    rules={{
                        required: 'First name is required',
                        minLength: {
                            value: 2,
                            message:
                                'First name should be at least 2 characters long',
                        },
                        maxLength: {
                            value: 10,
                            message:
                                'First name should be max 10 characters long',
                        },
                    }}
                />
                <CustomInput
                    name='lastName'
                    control={control}
                    placeholder='Last Name'
                    rules={{
                        required: 'Last name is required',
                        minLength: {
                            value: 2,
                            message:
                                'Last name should be at least 2 characters long',
                        },
                        maxLength: {
                            value: 15,
                            message:
                                'Last name should be max 15 characters long',
                        },
                    }}
                />
                <CustomInput
                    name='username'
                    control={control}
                    placeholder='Username'
                    rules={{
                        required: 'Username is required',
                        minLength: {
                            value: 8,
                            message:
                                'Username should be at least 8 characters long',
                        },
                        //    number required, special char required, upper & lower case
                        maxLength: {
                            value: 24,
                            message: 'Name should be max 24 characters long',
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9]*$/g,
                        },
                    }}
                />

                <CustomInput
                    name='email'
                    control={control}
                    placeholder='Email'
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: EMAIL_REGEX,
                            message: 'Email is invalid',
                        },
                    }}
                />
                <CustomInput
                    name='password'
                    control={control}
                    placeholder='Password'
                    secureTextEntry
                    rules={{
                        //    number required, special char required, upper & lower case
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message:
                                'Password should be at least 8 characters long',
                        },
                    }}
                />
                <CustomInput
                    name='password-repeat'
                    control={control}
                    placeholder='Repeat Password'
                    secureTextEntry
                    rules={{
                        validate: (value) =>
                            value === pwd || 'Password do not match',
                    }}
                />

                <CustomButton
                    text='Register'
                    onPress={handleSubmit(onRegisterPressed)}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>
                        Terms of Use
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.link} onPress={onPrivacyPressed}>
                        Privacy Policy
                    </Text>
                </Text>

                <CustomButton
                    text='Have an account? Sign in'
                    onPress={onSignInPress}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});

export default SignUpScreen;
