//      affiliations.provider.js
//* ======================================
//      this file deals with custom work relating
//      to affiliations (permissions/roles)
import * as queries from '../queries';
import { Auth, API, graphqlOperation } from 'aws-amplify';
export const getDivisionSample = async (division) => {
    //      get some basic division info as example

    //* get all the division info
    try {
        const gqlResponse = await API.graphql({
            query: queries.getDivision,
            variables: {
                id: division,
            },
        });
        if (gqlResponse.length < 1) {
            return null;
        }
        return gqlResponse;
    } catch (error) {
        console.log('Error getting current user', error);
        return null;
    }
};
