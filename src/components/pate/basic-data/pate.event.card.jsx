import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const PateEventCard = ({ eventItem }) => {
    const navigation = useNavigation();
    //printObject('mtrTheme:', mtrTheme);
    function pressHandler() {
        // if the user is registered, take them to registerForm
        console.log('PRESSED');
    }
    return (
        <>
            <View style={styles.rootContainer}>
                <Pressable
                    onPress={pressHandler}
                    style={({ pressed }) => pressed && styles.pressed}
                >
                    <View style={styles.meetingItem}>
                        <View style={styles.firstRow}>
                            <View>
                                <Text style={{ padding: 10 }}>
                                    {eventItem.eventDate}
                                </Text>
                            </View>
                            {Platform.OS === 'ios' && (
                                <View>
                                    <Text style={{ padding: 10 }}>
                                        {eventItem.name}
                                    </Text>
                                </View>
                            )}
                            {Platform.OS === 'android' && (
                                <View style={{ padding: 1 }}>
                                    <Text>ANDROID TEST</Text>>
                                </View>
                            )}
                        </View>
                    </View>
                </Pressable>
            </View>
        </>
    );
};

export default PateEventCard;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    rootContainer: {
        marginHorizontal: 10,
    },
    meetingItem: {
        marginVertical: 5,
        pading: 10,
        // paddingBottom: 10,
        backgroundColor: 'cyan',
        flexDirection: 'row',
        //justifyContent: 'space-between',
        borderRadius: 10,
        elevation: 3,
        shadowColor: 'yellow',
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    firstRow: {
        flexDirection: 'row',
    },
    dateWrapper: {
        margin: 5,
    },
    // dataWrapper: {
    //     flexDirection: 'column',
    // },
    col1: {
        paddingVertical: 8,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 10,
        // borderWidth: 1,
        // borderColor: 'yellow',
    },
    eventDateWrapper: {
        // paddingTop: 5,
        // borderWidth: 1,
        // borderColor: 'yellow',
    },

    eventTimeWrapper: {
        marginTop: 5,
        marginBottom: 5,
        // paddingHorizontal: 0,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 2,
        // borderWidth: 1,
        // borderColor: 'white',
    },
    eventTime: {
        // marginLeft: 5,
        // marginRight: 30,
        fontSize: 16,
        color: 'white',
        justifyContent: 'center',
    },
    registeredWrapper: {
        borderWidth: 1,
        padding: 4,
        borderRadius: 10,
        borderColor: 'green',
        backgroundColor: 'green',
        alignItems: 'center',
    },
    registeredText: { color: 'white', fontSize: 10 },
    col2: {
        flex: 1,
        paddingVertical: 8,
        flexDirection: 'column',
        justifyContent: 'space-around',
        // borderWidth: 1,
        // borderColor: 'yellow',
    },
    locationWrapper: {
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'white',
    },
    locationText: {
        width: '100%',
        marginLeft: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'lightgrey',
    },
    hostWrapper: {
        paddingLeft: 25,
        // borderWidth: 1,
        // borderColor: 'white',
    },
    hostName: {
        // marginLeft: 20,
        fontSize: 20,
        // fontWeight: 'bold',
        color: 'lightgrey',
    },
    hostRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-start',
    },
});
