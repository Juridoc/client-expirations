/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import { Entity } from './entity';
/**
 * Expirations mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load the expiration that corresponds to the specified Id.
     * @param id Expiration Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the expiration entity.
     * @throws Throws an error when the expiration wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity | undefined>;
    /**
     * List all expirations that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the expiration list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all expirations that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of expirations or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
}
