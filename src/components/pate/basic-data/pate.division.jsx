import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../../cazaderoQL/queries';
import { getDivisionSample } from '../../../cazaderoQL/providers/division.provider';
import { useFocusEffect } from '@react-navigation/native';
import pateEventCard from './pate.event.card';
import PateEventCard from './pate.event.card';
const PateDivision = () => {
    const [divisionInfo, setDivisionInfo] = useState();
    const [eventList, setEventList] = useState([]);

    async function getDivisionData() {
        try {
            getDivisionSample('00eaef41-cc5f-4b95-987e-7e8298399ab4').then(
                (response) => {
                    console.log('reponse', response);
                    setDivisionInfo(response.data.getDivision);
                },
                []
            );
        } catch (error) {
            console.log('Error getting Division sample', error);
        }
    }
    async function solidifyData() {
        console.log('divisionInfo.events.items', divisionInfo?.events?.items);
        if (divisionInfo?.events?.items) {
            setEventList(divisionInfo.events.items);
        }
    }

    useEffect(() => {
        getDivisionData();
        solidifyData();
    }, []);

    return (
        <>
            <View>
                <Text>DIVISION INFO</Text>
            </View>

            {eventList && (
                <FlatList
                    data={eventList}
                    keyExtractor={(item, key) => key}
                    renderItem={({ item }) => (
                        <PateEventCard eventItem={item} />
                    )}
                />
            )}
        </>
    );
};

export default PateDivision;

const styles = StyleSheet.create({});
