
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Academic {
    profession?: string;
    studyHouse?: string;
    degree?: string;
    status?: string;
}

export class Client {
    plate?: string;
}

export class Employee {
    data?: Person;
    academic?: Academic;
    client?: string;
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
}

export class Skill {
    name?: string;
}
