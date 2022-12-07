/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSystem = /* GraphQL */ `
  subscription OnCreateSystem($filter: ModelSubscriptionSystemFilterInput) {
    onCreateSystem(filter: $filter) {
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
export const onUpdateSystem = /* GraphQL */ `
  subscription OnUpdateSystem($filter: ModelSubscriptionSystemFilterInput) {
    onUpdateSystem(filter: $filter) {
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
export const onDeleteSystem = /* GraphQL */ `
  subscription OnDeleteSystem($filter: ModelSubscriptionSystemFilterInput) {
    onDeleteSystem(filter: $filter) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
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
export const onCreateOrganizations = /* GraphQL */ `
  subscription OnCreateOrganizations(
    $filter: ModelSubscriptionOrganizationsFilterInput
  ) {
    onCreateOrganizations(filter: $filter) {
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
export const onUpdateOrganizations = /* GraphQL */ `
  subscription OnUpdateOrganizations(
    $filter: ModelSubscriptionOrganizationsFilterInput
  ) {
    onUpdateOrganizations(filter: $filter) {
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
export const onDeleteOrganizations = /* GraphQL */ `
  subscription OnDeleteOrganizations(
    $filter: ModelSubscriptionOrganizationsFilterInput
  ) {
    onDeleteOrganizations(filter: $filter) {
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
export const onCreateAffiliations = /* GraphQL */ `
  subscription OnCreateAffiliations(
    $filter: ModelSubscriptionAffiliationsFilterInput
  ) {
    onCreateAffiliations(filter: $filter) {
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
export const onUpdateAffiliations = /* GraphQL */ `
  subscription OnUpdateAffiliations(
    $filter: ModelSubscriptionAffiliationsFilterInput
  ) {
    onUpdateAffiliations(filter: $filter) {
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
export const onDeleteAffiliations = /* GraphQL */ `
  subscription OnDeleteAffiliations(
    $filter: ModelSubscriptionAffiliationsFilterInput
  ) {
    onDeleteAffiliations(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
