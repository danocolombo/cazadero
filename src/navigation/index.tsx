/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabPicScreen from '../screens/TabPicScreen';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Auth, Hub } from 'aws-amplify';
export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    //   --------- Navigation !!!!! ----------------
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(undefined);
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
    const checkUser = async () => {
        try {
            const authUser = await Auth.currentAuthenticatedUser({
                bypassCache: true,
            });
            if (authUser?.attributes?.sub) {
                setIsUserAuthenticated(authUser);
            } else {
                setIsUserAuthenticated(null);
            }
        } catch (e) {
            setIsUserAuthenticated(null);
        }
    };
    useEffect(() => {
        //getSystemVariables();  //     Need to get system variables??
        checkUser();
        const listener = (data) => {
            if (data.payload.event === 'signIn') {
                checkUser();
            } else if (data.payload.event === 'signOut') {
                Cache.clear();
                clearUser();
                printObject('NAV:64-->signOut() received', '');
                setIsUserAuthenticated(false);
            }
        };
        try {
            Hub.listen('auth', listener);
        } catch (error) {
            printObject('NAV:71-->hub listener catch:\n', error);
        }

        //make suree to unsubscribe....
        return () => Hub.remove('auth', listener);
    }, []);

    // async function checkUser() {
    //     const current = await Auth.currentAuthenticatedUser();
    //     if (current?.attributes?.sub) {
    //         setUserLoggedIn(true);
    //     }
    // }
    useEffect(() => {
        const listener = (data) => {
            if (data.payload.event === 'signIn') {
                //      signIn acknowledged
                checkUser();
            }
        };
    });
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator isUserAuthenticated />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({ isUserAuthenticated }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Root'
                component={BottomTabNavigator}
                initialParams={{ isUserAuthenticated: isUserAuthenticated }}
            />
            <Stack.Screen
                name='NotFound'
                component={NotFoundScreen}
                options={{ title: 'Oops!' }}
            />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name='Modal' component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();
    const isAuthenticated = route.params.isUserAuthenticated;

    if (!isAuthenticated) {
        const isAuthenticated = false;
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name='SignIn'
                    component={SignInScreen}
                    options={{ title: 'Sign in', headerShown: false }}
                />
                <Stack.Screen
                    name='SignUp'
                    component={SignUpScreen}
                    options={{ title: 'Create an account' }}
                />
            </Stack.Navigator>
        );
    }
    return (
        <BottomTab.Navigator
            initialRouteName='TabOne'
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            <BottomTab.Screen
                name='TabOne'
                component={TabOneScreen}
                options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
                    title: 'Tab One',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name='code' color={color} />
                    ),
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Modal')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                        >
                            <FontAwesome
                                name='info-circle'
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name='TabTwo'
                component={TabTwoScreen}
                options={{
                    title: 'Tab Two',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name='code' color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name='TabPic'
                component={TabPicScreen}
                options={{
                    title: 'Tab Pic',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name='code' color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
