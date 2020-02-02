/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Profiles from '@juridoc/client-profiles';
import * as Documents from '@juridoc/client-documents';

import * as Types from './types';

/**
 * Expiration entity class.
 */
@RestDB.Schema.Entity('expirations')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Expiration Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Profiles.Entity, [
    'id',
    'contact.id',
    'contact.pictureId',
    'contact.name',
    'contact.personal.firstName',
    'contact.personal.lastName',
    'contact.professional.denomination'
  ])
  @Class.Public()
  public profile!: Profiles.Entity;

  /**
   * Context Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public contextId!: string;

  /**
   * Context entity (as a document)
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Documents.Entity, ['id', 'name'])
  @Class.Public()
  public contextAsDocument!: Documents.Entity;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Expiration date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public expireAt!: Date;

  /**
   * Next reminder date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public reminderAt!: Date;

  /**
   * Expiration status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration([...Object.values(Types.Status.Common), ...Object.values(Types.Status.System)])
  @Class.Public()
  public status!: Types.Status.Common | Types.Status.System;

  /**
   * Number of days to wait for sending new reminders.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public reminderEvery!: number;

  /**
   * Number of days before expiration to send new reminder.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public reminderBefore!: number;

  /**
   * Last error response.
   */
  @RestDB.Schema.Object(Object)
  @RestDB.Schema.Null()
  @Class.Public()
  public lastError?: RestDB.Entity | null;
}
