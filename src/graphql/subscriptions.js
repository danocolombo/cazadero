/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
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
export const onCreateRegion = /* GraphQL */ `
  subscription OnCreateRegion($filter: ModelSubscriptionRegionFilterInput) {
    onCreateRegion(filter: $filter) {
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
export const onUpdateRegion = /* GraphQL */ `
  subscription OnUpdateRegion($filter: ModelSubscriptionRegionFilterInput) {
    onUpdateRegion(filter: $filter) {
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
export const onDeleteRegion = /* GraphQL */ `
  subscription OnDeleteRegion($filter: ModelSubscriptionRegionFilterInput) {
    onDeleteRegion(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateEventLocation = /* GraphQL */ `
  subscription OnCreateEventLocation(
    $filter: ModelSubscriptionEventLocationFilterInput
  ) {
    onCreateEventLocation(filter: $filter) {
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
export const onUpdateEventLocation = /* GraphQL */ `
  subscription OnUpdateEventLocation(
    $filter: ModelSubscriptionEventLocationFilterInput
  ) {
    onUpdateEventLocation(filter: $filter) {
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
export const onDeleteEventLocation = /* GraphQL */ `
  subscription OnDeleteEventLocation(
    $filter: ModelSubscriptionEventLocationFilterInput
  ) {
    onDeleteEventLocation(filter: $filter) {
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
export const onCreateEventContact = /* GraphQL */ `
  subscription OnCreateEventContact(
    $filter: ModelSubscriptionEventContactFilterInput
  ) {
    onCreateEventContact(filter: $filter) {
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
export const onUpdateEventContact = /* GraphQL */ `
  subscription OnUpdateEventContact(
    $filter: ModelSubscriptionEventContactFilterInput
  ) {
    onUpdateEventContact(filter: $filter) {
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
export const onDeleteEventContact = /* GraphQL */ `
  subscription OnDeleteEventContact(
    $filter: ModelSubscriptionEventContactFilterInput
  ) {
    onDeleteEventContact(filter: $filter) {
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
export const onCreateMeal = /* GraphQL */ `
  subscription OnCreateMeal($filter: ModelSubscriptionMealFilterInput) {
    onCreateMeal(filter: $filter) {
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
export const onUpdateMeal = /* GraphQL */ `
  subscription OnUpdateMeal($filter: ModelSubscriptionMealFilterInput) {
    onUpdateMeal(filter: $filter) {
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
export const onDeleteMeal = /* GraphQL */ `
  subscription OnDeleteMeal($filter: ModelSubscriptionMealFilterInput) {
    onDeleteMeal(filter: $filter) {
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
export const onCreateRegistration = /* GraphQL */ `
  subscription OnCreateRegistration(
    $filter: ModelSubscriptionRegistrationFilterInput
  ) {
    onCreateRegistration(filter: $filter) {
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
export const onUpdateRegistration = /* GraphQL */ `
  subscription OnUpdateRegistration(
    $filter: ModelSubscriptionRegistrationFilterInput
  ) {
    onUpdateRegistration(filter: $filter) {
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
export const onDeleteRegistration = /* GraphQL */ `
  subscription OnDeleteRegistration(
    $filter: ModelSubscriptionRegistrationFilterInput
  ) {
    onDeleteRegistration(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
