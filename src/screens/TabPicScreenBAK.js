import { View, Text, Image, Button } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Auth, Storage, API } from 'aws-amplify';
import { createUser } from '../graphql/mutations';
const TabPicScreen = () => {
    const [image, setImage] = useState(null);
    const [graphieFile, setGraphicFile] = useState();
    async function saveFile() {
        //      login
        const creds = {
            username: 'dcolombo',
            password: 'R0mans1212!',
        };
        Auth.signIn(creds).then(() => {
            //      get image extension
            const ext = image.slice(-4);
            const fileName = 'user-image-what' + ext;
            //      upload
            try {
                Storage.put(graphieFile.name, graphieFile, {
                    contentType: 'image/png', // contentType is optional
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

            // Storage.put(fileName, graphieFile, {
            //     level: 'public',
            //     contentType: 'image/*',
            //     progressCallback(progress) {
            //         setLoading(progress);
            //     },
            // })
            // .then((response) => {
            //     console.log('response.key:', response.key);
            // })
            // .catch((error) => {
            //     console.log(error);
            //     //return error.response;
            // });

            //      --------------------------

            // Storage.put(fileName, image, {
            //     level: 'public',
            //     contentType: 'image/jpg',
            // })
            //     .then((res) => {
            //         console.log('Storage.put success:\n', res);
            //     })
            //     .catch((e) => {
            //         console.log('Storage.put failure:', e);
            //     });
            const user = {
                sub: 'this-is-junk-sub-not-in-cognito',
                firstName: 'Useless',
                lastName: 'Entry',
                username: 'useless',
                email: 'email@somewhere.com',
                phone: 'phone number',
                picture: fileName,
            };
            API.graphql({
                query: createUser,
                variables: { input: user },
            })
                .then((res) => {
                    console.log('API.graphql success:\n', res);
                })
                .catch((e) => {
                    console.log('API.graphql failure:\n', e);
                });
        });
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log('pic uri\n', result.assets[0].uri);
        console.log('details of pic', result.assets[0]);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setGraphicFile(result.assets[0]);
        }
    };
    console.log('image:', image);

    return (
        <>
            <View>
                <Text>Let's Enter a new picture...</Text>
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
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
            <View>
                <Button title='Upload File to S3' onPress={saveFile} />
            </View>
        </>
    );
};

export default TabPicScreen;
