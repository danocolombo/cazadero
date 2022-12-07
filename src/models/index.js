// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { System, Location, Organizations, Affiliations, User } = initSchema(schema);

export {
  System,
  Location,
  Organizations,
  Affiliations,
  User
};