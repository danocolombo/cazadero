/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      orgCompKey
      divisions {
        items {
          id
          code
          createdAt
          updatedAt
          organizationDivisionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        orgCompKey
        divisions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDivision = /* GraphQL */ `
  query GetDivision($id: ID!) {
    getDivision(id: $id) {
      id
      code
      organization {
        id
        name
        orgCompKey
        divisions {
          nextToken
        }
        createdAt
        updatedAt
      }
      events {
        items {
          id
          eventDate
          eventCompKey
          status
          plannedCount
          actualCount
          startTime
          endTime
          message
          name
          graphic
          createdAt
          updatedAt
          divisionEventsId
          eventLocationEventsId
          eventContactEventsId
          userEventsId
          eventMealId
        }
        nextToken
      }
      createdAt
      updatedAt
      organizationDivisionsId
    }
  }
`;
export const listDivisions = /* GraphQL */ `
  query ListDivisions(
    $filter: ModelDivisionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDivisions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        organization {
          id
          name
          orgCompKey
          createdAt
          updatedAt
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        organizationDivisionsId
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      eventDate
      eventCompKey
      division {
        id
        code
        organization {
          id
          name
          orgCompKey
          createdAt
          updatedAt
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
        organizationDivisionsId
      }
      registrations {
        items {
          id
          createdAt
          updatedAt
          eventRegistrationsId
          userRegistrationsId
        }
        nextToken
      }
      coordinator {
        id
        sub
        username
        firstName
        lastName
        registrations {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      plannedCount
      actualCount
      startTime
      endTime
      message
      name
      graphic
      location {
        id
        street
        city
        stateProv
        postalCode
        latitude
        longitude
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      contact {
        id
        firstName
        lastName
        email
        phone
        street
        city
        stateProv
        postalCode
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      meal {
        id
        deadline
        cost
        plannedCount
        actualCount
        startTime
        message
        event {
          id
          eventDate
          eventCompKey
          status
          plannedCount
          actualCount
          startTime
          endTime
          message
          name
          graphic
          createdAt
          updatedAt
          divisionEventsId
          eventLocationEventsId
          eventContactEventsId
          userEventsId
          eventMealId
        }
        createdAt
        updatedAt
        mealEventId
      }
      createdAt
      updatedAt
      divisionEventsId
      eventLocationEventsId
      eventContactEventsId
      userEventsId
      eventMealId
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventDate
        eventCompKey
        division {
          id
          code
          createdAt
          updatedAt
          organizationDivisionsId
        }
        registrations {
          nextToken
        }
        coordinator {
          id
          sub
          username
          firstName
          lastName
          createdAt
          updatedAt
        }
        status
        plannedCount
        actualCount
        startTime
        endTime
        message
        name
        graphic
        location {
          id
          street
          city
          stateProv
          postalCode
          latitude
          longitude
          createdAt
          updatedAt
        }
        contact {
          id
          firstName
          lastName
          email
          phone
          street
          city
          stateProv
          postalCode
          createdAt
          updatedAt
        }
        meal {
          id
          deadline
          cost
          plannedCount
          actualCount
          startTime
          message
          createdAt
          updatedAt
          mealEventId
        }
        createdAt
        updatedAt
        divisionEventsId
        eventLocationEventsId
        eventContactEventsId
        userEventsId
        eventMealId
      }
      nextToken
    }
  }
`;
export const getEventLocation = /* GraphQL */ `
  query GetEventLocation($id: ID!) {
    getEventLocation(id: $id) {
      id
      street
      city
      stateProv
      postalCode
      latitude
      longitude
      events {
        items {
          id
          eventDate
          eventCompKey
          status
          plannedCount
          actualCount
          startTime
          endTime
          message
          name
          graphic
          createdAt
          updatedAt
          divisionEventsId
          eventLocationEventsId
          eventContactEventsId
          userEventsId
          eventMealId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEventLocations = /* GraphQL */ `
  query ListEventLocations(
    $filter: ModelEventLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        street
        city
        stateProv
        postalCode
        latitude
        longitude
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventContact = /* GraphQL */ `
  query GetEventContact($id: ID!) {
    getEventContact(id: $id) {
      id
      firstName
      lastName
      email
      phone
      street
      city
      stateProv
      postalCode
      events {
        items {
          id
          eventDate
          eventCompKey
          status
          plannedCount
          actualCount
          startTime
          endTime
          message
          name
          graphic
          createdAt
          updatedAt
          divisionEventsId
          eventLocationEventsId
          eventContactEventsId
          userEventsId
          eventMealId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEventContacts = /* GraphQL */ `
  query ListEventContacts(
    $filter: ModelEventContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        phone
        street
        city
        stateProv
        postalCode
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMeal = /* GraphQL */ `
  query GetMeal($id: ID!) {
    getMeal(id: $id) {
      id
      deadline
      cost
      plannedCount
      actualCount
      startTime
      message
      event {
        id
        eventDate
        eventCompKey
        division {
          id
          code
          createdAt
          updatedAt
          organizationDivisionsId
        }
        registrations {
          nextToken
        }
        coordinator {
          id
          sub
          username
          firstName
          lastName
          createdAt
          updatedAt
        }
        status
        plannedCount
        actualCount
        startTime
        endTime
        message
        name
        graphic
        location {
          id
          street
          city
          stateProv
          postalCode
          latitude
          longitude
          createdAt
          updatedAt
        }
        contact {
          id
          firstName
          lastName
          email
          phone
          street
          city
          stateProv
          postalCode
          createdAt
          updatedAt
        }
        meal {
          id
          deadline
          cost
          plannedCount
          actualCount
          startTime
          message
          createdAt
          updatedAt
          mealEventId
        }
        createdAt
        updatedAt
        divisionEventsId
        eventLocationEventsId
        eventContactEventsId
        userEventsId
        eventMealId
      }
      createdAt
      updatedAt
      mealEventId
    }
  }
`;
export const listMeals = /* GraphQL */ `
  query ListMeals(
    $filter: ModelMealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deadline
        cost
        plannedCount
        actualCount
        startTime
        message
        event {
          id
          eventDate
          eventCompKey
          status
          plannedCount
          actualCount
          startTime
          endTime
          message
          name
          graphic
          createdAt
          updatedAt
          divisionEventsId
          eventLocationEventsId
          eventContactEventsId
          userEventsId
          eventMealId
        }
        createdAt
        updatedAt
        mealEventId
      }
      nextToken
    }
  }
`;
export const getRegistration = /* GraphQL */ `
  query GetRegistration($id: ID!) {
    getRegistration(id: $id) {
      id
      event {
        id
        eventDate
        eventCompKey
        division {
          id
          code
          createdAt
          updatedAt
          organizationDivisionsId
        }
        registrations {
          nextToken
        }
        coordinator {
          id
          sub
          username
          firstName
          lastName
          createdAt
          updatedAt
        }
        status
        plannedCount
        actualCount
        startTime
        endTime
        message
        name
        graphic
        location {
          id
          street
          city
          stateProv
          postalCode
          latitude
          longitude
          createdAt
          updatedAt
        }
        contact {
          id
          firstName
          lastName
          email
          phone
          street
          city
          stateProv
          postalCode
          createdAt
          updatedAt
        }
        meal {
          id
          deadline
          cost
          plannedCount
          actualCount
          startTime
          message
          createdAt
          updatedAt
          mealEventId
        }
        createdAt
        updatedAt
        divisionEventsId
        eventLocationEventsId
        eventContactEventsId
        userEventsId
        eventMealId
      }
      registrar {
        id
        sub
        username
        firstName
        lastName
        registrations {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      eventRegistrationsId
      userRegistrationsId
    }
  }
`;
export const listRegistrations = /* GraphQL */ `
  query ListRegistrations(
    $filter: ModelRegistrationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        event {
          id
          eventDate
          eventCompKey
          status
          plannedCount
          actualCount
          startTime
          endTime
          message
          name
          graphic
          createdAt
          updatedAt
          divisionEventsId
          eventLocationEventsId
          eventContactEventsId
          userEventsId
          eventMealId
        }
        registrar {
          id
          sub
          username
          firstName
          lastName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        eventRegistrationsId
        userRegistrationsId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      sub
      username
      firstName
      lastName
      registrations {
        items {
          id
          createdAt
          updatedAt
          eventRegistrationsId
          userRegistrationsId
        }
        nextToken
      }
      events {
        items {
          id
          eventDate
          eventCompKey
          status
          plannedCount
          actualCount
          startTime
          endTime
          message
          name
          graphic
          createdAt
          updatedAt
          divisionEventsId
          eventLocationEventsId
          eventContactEventsId
          userEventsId
          eventMealId
        }
        nextToken
      }
      createdAt
      updatedAt
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
        username
        firstName
        lastName
        registrations {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
