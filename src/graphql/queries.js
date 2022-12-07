/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSystem = /* GraphQL */ `
  query GetSystem($id: ID!) {
    getSystem(id: $id) {
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
export const listSystems = /* GraphQL */ `
  query ListSystems(
    $filter: ModelSystemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSystems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSystems = /* GraphQL */ `
  query SyncSystems(
    $filter: ModelSystemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSystems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrganizations = /* GraphQL */ `
  query GetOrganizations($id: ID!) {
    getOrganizations(id: $id) {
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
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizations = /* GraphQL */ `
  query SyncOrganizations(
    $filter: ModelOrganizationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAffiliations = /* GraphQL */ `
  query GetAffiliations($id: ID!) {
    getAffiliations(id: $id) {
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
export const listAffiliations = /* GraphQL */ `
  query ListAffiliations(
    $filter: ModelAffiliationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAffiliations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncAffiliations = /* GraphQL */ `
  query SyncAffiliations(
    $filter: ModelAffiliationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAffiliations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const affiliationsByUserID = /* GraphQL */ `
  query AffiliationsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAffiliationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    affiliationsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const affiliationsByOrganizationsID = /* GraphQL */ `
  query AffiliationsByOrganizationsID(
    $organizationsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAffiliationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    affiliationsByOrganizationsID(
      organizationsID: $organizationsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
