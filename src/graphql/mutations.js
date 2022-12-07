/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSystem = /* GraphQL */ `
  mutation CreateSystem(
    $input: CreateSystemInput!
    $condition: ModelSystemConditionInput
  ) {
    createSystem(input: $input, condition: $condition) {
      id
      version
      ios_version
      android_version
      defaultProfilePicture
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSystem = /* GraphQL */ `
  mutation UpdateSystem(
    $input: UpdateSystemInput!
    $condition: ModelSystemConditionInput
  ) {
    updateSystem(input: $input, condition: $condition) {
      id
      version
      ios_version
      android_version
      defaultProfilePicture
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSystem = /* GraphQL */ `
  mutation DeleteSystem(
    $input: DeleteSystemInput!
    $condition: ModelSystemConditionInput
  ) {
    deleteSystem(input: $input, condition: $condition) {
      id
      version
      ios_version
      android_version
      defaultProfilePicture
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      street
      city
      stateProv
      postalCode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      street
      city
      stateProv
      postalCode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      street
      city
      stateProv
      postalCode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrganizations = /* GraphQL */ `
  mutation CreateOrganizations(
    $input: CreateOrganizationsInput!
    $condition: ModelOrganizationsConditionInput
  ) {
    createOrganizations(input: $input, condition: $condition) {
      id
      code
      name
      heroMessage
      Affiliations {
        items {
          id
          role
          status
          userID
          organizationsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Location {
        id
        street
        city
        stateProv
        postalCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationsLocationId
    }
  }
`;
export const updateOrganizations = /* GraphQL */ `
  mutation UpdateOrganizations(
    $input: UpdateOrganizationsInput!
    $condition: ModelOrganizationsConditionInput
  ) {
    updateOrganizations(input: $input, condition: $condition) {
      id
      code
      name
      heroMessage
      Affiliations {
        items {
          id
          role
          status
          userID
          organizationsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Location {
        id
        street
        city
        stateProv
        postalCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationsLocationId
    }
  }
`;
export const deleteOrganizations = /* GraphQL */ `
  mutation DeleteOrganizations(
    $input: DeleteOrganizationsInput!
    $condition: ModelOrganizationsConditionInput
  ) {
    deleteOrganizations(input: $input, condition: $condition) {
      id
      code
      name
      heroMessage
      Affiliations {
        items {
          id
          role
          status
          userID
          organizationsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Location {
        id
        street
        city
        stateProv
        postalCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationsLocationId
    }
  }
`;
export const createAffiliations = /* GraphQL */ `
  mutation CreateAffiliations(
    $input: CreateAffiliationsInput!
    $condition: ModelAffiliationsConditionInput
  ) {
    createAffiliations(input: $input, condition: $condition) {
      id
      role
      status
      userID
      organizationsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAffiliations = /* GraphQL */ `
  mutation UpdateAffiliations(
    $input: UpdateAffiliationsInput!
    $condition: ModelAffiliationsConditionInput
  ) {
    updateAffiliations(input: $input, condition: $condition) {
      id
      role
      status
      userID
      organizationsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAffiliations = /* GraphQL */ `
  mutation DeleteAffiliations(
    $input: DeleteAffiliationsInput!
    $condition: ModelAffiliationsConditionInput
  ) {
    deleteAffiliations(input: $input, condition: $condition) {
      id
      role
      status
      userID
      organizationsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      sub
      firstName
      lastName
      username
      email
      phone
      Affiliations {
        items {
          id
          role
          status
          userID
          organizationsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Location {
        id
        street
        city
        stateProv
        postalCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      birthday
      shirt
      picture
      defaulltOrgID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userLocationId
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      sub
      firstName
      lastName
      username
      email
      phone
      Affiliations {
        items {
          id
          role
          status
          userID
          organizationsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Location {
        id
        street
        city
        stateProv
        postalCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      birthday
      shirt
      picture
      defaulltOrgID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userLocationId
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      sub
      firstName
      lastName
      username
      email
      phone
      Affiliations {
        items {
          id
          role
          status
          userID
          organizationsID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Location {
        id
        street
        city
        stateProv
        postalCode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      birthday
      shirt
      picture
      defaulltOrgID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userLocationId
      owner
    }
  }
`;
