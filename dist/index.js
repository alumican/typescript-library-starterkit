/*! typescript-library-starterkit 1.0.0 (c) 2022 alumican, licensed under the MIT, more information https://github.com/alumican/typescript-library-starterkit */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.yournamespace = {}));
})(this, (function (exports) { 'use strict';

    /**
     * This is class sample.
     */
    class Person {
        /**
         * @param name - your name
         */
        constructor(name) {
            this.name = name;
        }
        /**
         * This function return greeting.
         * @returns greeting text
         */
        sayHello() {
            return `Hello, I'm ${this.name}`;
        }
    }
    /**
     * This is function sample.
     * @returns timestamp
     */
    function getTime() {
        return Date.now();
    }
    /**
     * This is variable sample.
     */
    const PI2 = Math.PI * 2;
    /**
     * This is enum sample.
     */
    exports.Menu = void 0;
    (function (Menu) {
        Menu[Menu["toast"] = 0] = "toast";
        Menu[Menu["sandwich"] = 1] = "sandwich";
        Menu[Menu["egg"] = 2] = "egg";
        Menu[Menu["milk"] = 3] = "milk";
        Menu[Menu["coffee"] = 4] = "coffee";
    })(exports.Menu || (exports.Menu = {}));

    exports.PI2 = PI2;
    exports.Person = Person;
    exports.getTime = getTime;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
