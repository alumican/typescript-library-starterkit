/**
 * This is class sample.
 */
export declare class Person {
    /**
     * @param name - your name
     */
    constructor(name: string);
    /**
     * This function return greeting.
     * @returns greeting text
     */
    sayHello(): string;
    private readonly name;
}
/**
 * This is function sample.
 * @returns timestamp
 */
export declare function getTime(): number;
/**
 * This is stack trace test.
 */
export declare function throwException(): void;
/**
 * This is variable sample.
 */
export declare const PI2: number;
/**
 * This is enum sample.
 */
export declare enum Menu {
    toast = 0,
    sandwich = 1,
    egg = 2,
    milk = 3,
    coffee = 4
}
/**
 * This is interface sample.
 */
export interface Lunch {
    /**
     * get ordered menu
     * @returns timestamp
     */
    getMenu(): Menu;
    /**
     * get ordered price
     */
    getPrice(): number;
}
