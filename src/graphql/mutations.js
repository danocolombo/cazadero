/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      name
      orgCompKey
      regions {
        items {
          id
          code
          createdAt
          updatedAt
          organizationRegionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      name
      orgCompKey
      regions {
        items {
          id
          code
          createdAt
          updatedAt
          organizationRegionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      name
      orgCompKey
      regions {
        items {
          id
          code
          createdAt
          updatedAt
          organizationRegionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRegion = /* GraphQL */ `
  mutation CreateRegion(
    $input: CreateRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    createRegion(input: $input, condition: $condition) {
      id
      code
      organization {
        id
        name
        orgCompKey
        regions {
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
          regionEventsId
          eventLocationEventsId
          eventContactEventsId
          userEventsId
          eventMealId
        }
        nextToken
      }
      createdAt
      updatedAt
      organizationRegionsId
    }
  }
`;
export const updateRegion = /* GraphQL */ `
  mutation UpdateRegion(
    $input: UpdateRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    updateRegion(input: $input, condition: $condition) {
      id
      code
      organization {
        id
        name
        orgCompKey
        regions {
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
          regionEventsId
          eventLocationEventsId
          eventContactEventsId
          userEventsId
          eventMealId
        }
        nextToken
      }
      createdAt
      updatedAt
      organizationRegionsId
    }
  }
`;
export const deleteRegion = /* GraphQL */ `
  mutation DeleteRegion(
    $input: DeleteRegionInput!
    $condition: ModelRegionConditionInput
  ) {
    deleteRegion(input: $input, condition: $condition) {
      id
      code
      organization {
        id
        name
        orgCompKey
        regions {
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
          regionEventsId
          eventLocationEventsId
          eventContactEventsId
          userEventsId
          eventMealId
        }
        nextToken
      }
      createdAt
      updatedAt
      organizationRegionsId
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      eventDate
      eventCompKey
      region {
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
        organizationRegionsId
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
          regionEventsId
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
      regionEventsId
      eventLocationEventsId
      eventContactEventsId
      userEventsId
      eventMealId
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      eventDate
      eventCompKey
      region {
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
        organizationRegionsId
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
          regionEventsId
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
      regionEventsId
      eventLocationEventsId
      eventContactEventsId
      userEventsId
      eventMealId
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      eventDate
      eventCompKey
      region {
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
        organizationRegionsId
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
          regionEventsId
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
      regionEventsId
      eventLocationEventsId
      eventContactEventsId
      userEventsId
      eventMealId
    }
  }
`;
export const createEventLocation = /* GraphQL */ `
  mutation CreateEventLocation(
    $input: CreateEventLocationInput!
    $condition: ModelEventLocationConditionInput
  ) {
    createEventLocation(input: $input, condition: $condition) {
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
          regionEventsId
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
export const updateEventLocation = /* GraphQL */ `
  mutation UpdateEventLocation(
    $input: UpdateEventLocationInput!
    $condition: ModelEventLocationConditionInput
  ) {
    updateEventLocation(input: $input, condition: $condition) {
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
          regionEventsId
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
export const deleteEventLocation = /* GraphQL */ `
  mutation DeleteEventLocation(
    $input: DeleteEventLocationInput!
    $condition: ModelEventLocationConditionInput
  ) {
    deleteEventLocation(input: $input, condition: $condition) {
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
          regionEventsId
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
export const createEventContact = /* GraphQL */ `
  mutation CreateEventContact(
    $input: CreateEventContactInput!
    $condition: ModelEventContactConditionInput
  ) {
    createEventContact(input: $input, condition: $condition) {
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
          regionEventsId
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
export const updateEventContact = /* GraphQL */ `
  mutation UpdateEventContact(
    $input: UpdateEventContactInput!
    $condition: ModelEventContactConditionInput
  ) {
    updateEventContact(input: $input, condition: $condition) {
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
          regionEventsId
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
export const deleteEventContact = /* GraphQL */ `
  mutation DeleteEventContact(
    $input: DeleteEventContactInput!
    $condition: ModelEventContactConditionInput
  ) {
    deleteEventContact(input: $input, condition: $condition) {
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
          regionEventsId
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
export const createMeal = /* GraphQL */ `
  mutation CreateMeal(
    $input: CreateMealInput!
    $condition: ModelMealConditionInput
  ) {
    createMeal(input: $input, condition: $condition) {
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
        region {
          id
          code
          createdAt
          updatedAt
          organizationRegionsId
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
        regionEventsId
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
export const updateMeal = /* GraphQL */ `
  mutation UpdateMeal(
    $input: UpdateMealInput!
    $condition: ModelMealConditionInput
  ) {
    updateMeal(input: $input, condition: $condition) {
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
        region {
          id
          code
          createdAt
          updatedAt
          organizationRegionsId
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
        regionEventsId
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
export const deleteMeal = /* GraphQL */ `
  mutation DeleteMeal(
    $input: DeleteMealInput!
    $condition: ModelMealConditionInput
  ) {
    deleteMeal(input: $input, condition: $condition) {
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
        region {
          id
          code
          createdAt
          updatedAt
          organizationRegionsId
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
        regionEventsId
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
export const createRegistration = /* GraphQL */ `
  mutation CreateRegistration(
    $input: CreateRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    createRegistration(input: $input, condition: $condition) {
      id
      event {
        id
        eventDate
        eventCompKey
        region {
          id
          code
          createdAt
          updatedAt
          organizationRegionsId
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
        regionEventsId
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
export const updateRegistration = /* GraphQL */ `
  mutation UpdateRegistration(
    $input: UpdateRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    updateRegistration(input: $input, condition: $condition) {
      id
      event {
        id
        eventDate
        eventCompKey
        region {
          id
          code
          createdAt
          updatedAt
          organizationRegionsId
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
        regionEventsId
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
export const deleteRegistration = /* GraphQL */ `
  mutation DeleteRegistration(
    $input: DeleteRegistrationInput!
    $condition: ModelRegistrationConditionInput
  ) {
    deleteRegistration(input: $input, condition: $condition) {
      id
      event {
        id
        eventDate
        eventCompKey
        region {
          id
          code
          createdAt
          updatedAt
          organizationRegionsId
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
        regionEventsId
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
          regionEventsId
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
          regionEventsId
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
          regionEventsId
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
