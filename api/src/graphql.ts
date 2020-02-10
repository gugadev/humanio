
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Client {
    id?: number;
    name?: string;
}

export class Employee {
    data?: Person;
    title?: string;
    studyCenter?: string;
    degree?: string;
    studying?: boolean;
    photo?: string;
    client?: Client;
    skills?: Skill[];
}

export class Person {
    firstName?: string;
    lastName?: string;
    dni?: number;
    address?: string;
    phone?: string;
    email?: string;
}

export abstract class IQuery {
    abstract skills(): Skill[] | Promise<Skill[]>;

    abstract clients(): Client[] | Promise<Client[]>;

    abstract employees(): Employee[] | Promise<Employee[]>;
}

export class Skill {
    id?: number;
    name?: string;
}
