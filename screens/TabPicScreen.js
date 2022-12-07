import Auth from '@aws-amplify/auth';
import Amplify from '@aws-amplify/core';
import { Storage } from 'aws-amplify';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function TabPicScreen() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            const creds = {
                username: 'dcolombo',
                password: 'R0mans1212!',
            };
            Auth.signIn(creds).then(() => {
                try {
                    Storage.put(result.assets[0].fileName, result.assets[0], {
                        contentType: result.assets[0].type, // contentType is optional
                    })
                        .then((response) => {
                            console.log('uploaded');
                        })
                        .catch((error) => {
                            console.log('Error uploading file: ', error);
                        });
                } catch (e) {
                    console.log('try failures', e);
                }
            });
        }
    };

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Button
                title='Pick an image from camera roll'
                onPress={pickImage}
            />
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        marginHorizontal: 15,
    },
    percentage: {
        marginBottom: 10,
    },
    result: {
        paddingTop: 5,
    },
    info: {
        textAlign: 'center',
        marginBottom: 20,
    },
});
