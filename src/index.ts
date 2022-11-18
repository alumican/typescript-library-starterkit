/**
 * This is class sample.
 */
export class Person {

	/**
	 * @param name - your name
	 */
	constructor(name:string) {
		this.name = name;
	}

	/**
	 * This function return greeting.
	 * @returns greeting text
	 */
	public sayHello():string {
		return `Hello, I'm ${this.name}`;
	}

	private readonly name:string;
}

/**
 * This is function sample.
 * @returns timestamp
 */
export function getTime():number {
	return Date.now();
}

/**
 * This is stack trace test.
 */
export function throwException():void {
	throw new Error();
}

/**
 * This is variable sample.
 */
export const PI2 = Math.PI * 2;

/**
 * This is enum sample.
 */
export enum Menu {
	toast,
	sandwich,
	egg,
	milk,
	coffee,
}

/**
 * This is interface sample.
 */
export interface Lunch {

	/**
	 * get ordered menu
	 * @returns timestamp
	 */
	getMenu():Menu;

	/**
	 * get ordered price
	 */
	getPrice():number;
}
