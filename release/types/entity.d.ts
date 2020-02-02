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
export declare class Entity extends Class.Null {
    /**
     * Expiration Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile entity.
     */
    profile: Profiles.Entity;
    /**
     * Context Id.
     */
    contextId: string;
    /**
     * Context entity (as a document)
     */
    contextAsDocument: Documents.Entity;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * Expiration date.
     */
    expireAt: Date;
    /**
     * Next reminder date.
     */
    reminderAt: Date;
    /**
     * Expiration status.
     */
    status: Types.Status.Common | Types.Status.System;
    /**
     * Number of days to wait for sending new reminders.
     */
    reminderEvery: number;
    /**
     * Number of days before expiration to send new reminder.
     */
    reminderBefore: number;
    /**
     * Last error response.
     */
    lastError?: RestDB.Entity | null;
}
