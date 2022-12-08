import React, { useState } from 'react';
import {
    View,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
} from 'react-native';
import Logo from './logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth, Cache } from 'aws-amplify';
import { printObject } from '../../../src/utils/helpers';

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignInScreen = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit } = useForm();

    const onSignInPressed = async (data) => {
        if (loading) {
            return;
        }
        setLoading(true);
        //    login to AWS
        try {
            const LOGIN = true;
            const LOGOUT = false;
            if (LOGIN) {
                try {
                    console.log('1. signIn');
                    const response = await Auth.signIn(
                        data.username,
                        data.password
                    );
                    console.log(response);
                } catch (error) {
                    printObject('signIn failure:\n', error);
                }
            }

            try {
                console.log('2. currentSession');
                const cSession = await Auth.currentSession();
                console.log(cSession);
            } catch (error) {
                printObject('currentSession failure:\n', error);
            }

            try {
                console.log('3. currentCredentials');
                const cCredentials = await Auth.currentCredentials();
                console.log(cCredentials);
            } catch (error) {
                printObject('currentCredentials failure:\n', error);
            }
            try {
                console.log('4. currentUserSession');
                const cUserSession = await Auth.currentUserSession();
                console.log(cUserSession);
            } catch (error) {
                printObject('currentUserSession failure:\n', error);
            }
            try {
                console.log('5. currentUserInfo');
                const cUserInfo = await Auth.currentUserInfo();
                console.log(cUserInfo);
            } catch (error) {
                printObject('currentUserInfo failure:\n', error);
            }
            try {
                console.log('6. currentAuthenticatedUser');
                const cAuthenticatedUser =
                    await Auth.currentAuthenticatedUser();
                console.log(cAuthenticatedUser);
            } catch (error) {
                printObject('currentAuthenticatedUser failure:\n', error);
            }

            if (LOGOUT) {
                Cache.clear();
                const signoutResponse = await Auth.signOut();
            }
        } catch (error) {
            printObject('try catch:', error);
        }
        //     const response = await Auth.signIn(data.username, data.password);

        //     console.log(response);
        // } catch (error) {
        //     switch (error.code) {
        //         case 'UserNotFoundException':
        //             console.warn(error.message);
        //             break;
        //         case 'PasswordResetRequiredException':
        //             console.warn(error.message);
        //             break;
        //         case 'NotAuthorizedException':
        //             console.warn(error.message);
        //             break;
        //         default:
        //             console.warn(error.message);
        //             break;
        //     }

        // // Sign in

        setLoading(false);
    };

    const onForgotPasswordPressed = () => {
        // navigation.navigate("ForgotPassword");
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode='cover' />
            <View style={styles.container}>
                <CustomInput
                    name='username'
                    placeholder='username'
                    control={control}
                    autoCapitalize='none'
                    rules={{
                        required: 'Username is required',
                    }}
                />

                <CustomInput
                    name='password'
                    placeholder='Password'
                    secureTextEntry
                    control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 3,
                            message:
                                'Password should be minimum 3 characters long',
                        },
                    }}
                />

                <CustomButton
                    text={loading ? 'Loading...' : 'Sign In'}
                    onPress={handleSubmit(onSignInPressed)}
                />

                <CustomButton
                    text='Forgot password?'
                    onPress={onForgotPasswordPressed}
                    type='TERTIARY'
                />

                <SocialSignInButtons />

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPress}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        minHeight: '100%',
    },
    container: {
        padding: 20,
    },
    logo: {
        width: '100%',
        height: undefined,
        aspectRatio: 16 / 9,
    },
});

export default SignInScreen;
