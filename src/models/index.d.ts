import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerSystem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<System, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly version?: string | null;
  readonly ios_version?: string | null;
  readonly android_version?: string | null;
  readonly defaultProfilePicture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySystem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<System, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly version?: string | null;
  readonly ios_version?: string | null;
  readonly android_version?: string | null;
  readonly defaultProfilePicture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type System = LazyLoading extends LazyLoadingDisabled ? EagerSystem : LazySystem

export declare const System: (new (init: ModelInit<System>) => System) & {
  copyOf(source: System, mutator: (draft: MutableModel<System>) => MutableModel<System> | void): System;
}

type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly street?: string | null;
  readonly city?: string | null;
  readonly stateProv?: string | null;
  readonly postalCode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly street?: string | null;
  readonly city?: string | null;
  readonly stateProv?: string | null;
  readonly postalCode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerOrganizations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organizations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly name?: string | null;
  readonly heroMessage?: string | null;
  readonly Affiliations?: (Affiliations | null)[] | null;
  readonly Location?: Location | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly organizationsLocationId?: string | null;
}

type LazyOrganizations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organizations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly code?: string | null;
  readonly name?: string | null;
  readonly heroMessage?: string | null;
  readonly Affiliations: AsyncCollection<Affiliations>;
  readonly Location: AsyncItem<Location | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly organizationsLocationId?: string | null;
}

export declare type Organizations = LazyLoading extends LazyLoadingDisabled ? EagerOrganizations : LazyOrganizations

export declare const Organizations: (new (init: ModelInit<Organizations>) => Organizations) & {
  copyOf(source: Organizations, mutator: (draft: MutableModel<Organizations>) => MutableModel<Organizations> | void): Organizations;
}

type EagerAffiliations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Affiliations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly role?: string | null;
  readonly status?: string | null;
  readonly userID: string;
  readonly organizationsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAffiliations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Affiliations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly role?: string | null;
  readonly status?: string | null;
  readonly userID: string;
  readonly organizationsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Affiliations = LazyLoading extends LazyLoadingDisabled ? EagerAffiliations : LazyAffiliations

export declare const Affiliations: (new (init: ModelInit<Affiliations>) => Affiliations) & {
  copyOf(source: Affiliations, mutator: (draft: MutableModel<Affiliations>) => MutableModel<Affiliations> | void): Affiliations;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly Affiliations?: (Affiliations | null)[] | null;
  readonly Location?: Location | null;
  readonly birthday?: string | null;
  readonly shirt?: string | null;
  readonly picture?: string | null;
  readonly defaulltOrgID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userLocationId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly Affiliations: AsyncCollection<Affiliations>;
  readonly Location: AsyncItem<Location | undefined>;
  readonly birthday?: string | null;
  readonly shirt?: string | null;
  readonly picture?: string | null;
  readonly defaulltOrgID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userLocationId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}