/**
 * @module Foundation
 * @submodule Declaration
 * @for p5
 */

/**
 * Creates and names a new variable. A variable is a container for a value.
 * Variables that are declared with <a href="#/p5/let">let</a> will have block-scope.
 * This means that the variable only exists within the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block"
 * block</a> that it is created within.
 *
 *
 * From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let">the MDN entry</a>:
 * Declares a block scope local variable, optionally initializing it to a value.
 *
 * @property let
 *
 * @example
 * <div class='norender'>
 * <code>
 * let x = 2;
 * console.log(x); // prints 2 to the console
 * x = 1;
 * console.log(x); // prints 1 to the console
 * </code>
 * </div>
 */

/**
 * Creates and names a new constant variable. A variable is a container for a value.
 * Variables that are declared with <a href="#/p5/const">const</a> will have block-scope.
 * This means that the variable only exists within the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block"
 * block</a> that it is created within.
 * <a href="#/p5/let">const</a> is different from <a href="#/p5/let">let</a> in that
 * variables declared with <a href="#/p5/let">const</a> cannot be reassigned or redeclared.
 *
 * From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const">the MDN entry</a>:
 * Declares a read-only named constant.
 * Constants are block-scoped, much like variables defined using the 'let' statement.
 * The value of a constant can't be changed through reassignment, and it can't be redeclared.
 * @property const
 *
 * @example
 * <div class='norender'>
 * <code>
 * // define myFavNumber as a constant and give it the value 7
 * const myFavNumber = 7;
 * console.log('my favorite number is: ' + myFavNumber);
 * </code>
 * </div>
 */

/**
 * @submodule Control Statement
 */

/**
 * The if-else statement helps control the flow of your code.
 * A condition is placed between the parenthesis following 'if'.
 * When that condition evalues to < href="https://developer.mozilla.org/en-US/docs/Glossary/truthy">truthy</a>,
 * the code between the preceding curly braces is run.
 * Alternatively, when the condition evaluates to <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">falsy</a>,
 * the code between the curly braces that precedes 'else' is run instead.
 *
 * From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else">the MDN entry</a>:
 * The 'if' statement executes a statement if a specified condition is truthy.
 * If the condition is falsy, another statement can be executed
 * @property if-else
 *
 * @example
 * <div class='norender'>
 * <code>
 * let a = 4;
 * if (a > 0) {
 *   console.log('positive');
 * } else {
 *   console.log('negative');
 * }
 * </code>
 * </div>
 */

/**
 * @submodule Function
 */

/**
 * Creates and names a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions">function</a>.
 * A function is a set of statements that perform a task.
 * Optionally, functions can have parameters. <a href="https://developer.mozilla.org/en-US/docs/Glossary/Parameter">Parameters
 * are variables that are scoped to the function, that can be assigned a value when calling the function.
 *
 * From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function">the MDN entry</a>:
 * Declares a function with the specified parameters.
 * @property function
 *
 * @example
 * <div class='norender'>
 * <code>
 * function calculateRectArea(width, height) {
 *   return width * height;
 * }
 * calculateRectArea(4, 5); // calling the function
 * </code>
 * </div>
 */

/**
 * Specifies the value to be returned by a function.
 * @property return
 *
 * @example
 * <div class='norender'>
 * <code>
 * function calculateSquare(x) {
 *   return x * x;
 * }
 * calculateSquare(4); //return 16
 * </code>
 * </div>
 */

/**
 * @submodule Class
 */

/**
 * The class declaration creates a new class with a given name using prototype-based inheritance.
 * @property class
 *
 * @example
 * <div class='norender'>
 * <code>
 * class S1 {
 *   constructor(height, width) {
 *     this.name = 'Polygon';
 *     this.height = height;
 *     this.width = width;
 *   }
 * }
 * const poly = new S1(4, 5); //creating new instance of Polygon Class.
 * console.log(poly.name);
 * </code>
 * </div>
 */

/**
 * @submodule Iterative Statement
 */

/**
 * Creates a loop that executes a specified statement until the test condition evaluates to false.
 * The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
 * @property for
 *
 * @example
 * <div class='norender'>
 * <code>
 * for (let i = 0; i < 9; i++) {
 *   console.log(i);
 *   // more statements
 * }
 * </code>
 * </div>
 */

/**
 * Iterates over the enumerable properties of an object, in arbitrary order.
 * For each distinct property, statements can be executed.
 * @property for-in
 *
 * @example
 * <div class='norender'>
 * <code>
 * const person = { fname: 'John', lname: 'Doe', age: 25 };
 * let text = '';
 * let x;
 * for (x in person) {
 *   text += person[x] + '';
 * }
 * console.log(text); //'John Doe 25 '
 * </code>
 * </div>
 */

/**
 * Iterates over iterable objects (including arrays, array-like objects, iterators and generators),
 * invoking a custom iteration hook with statements to be executed for the value of each distinct property.
 * @property for-of
 *
 * @example
 * <div class='norender'>
 * <code>
 * const word = 'boo';
 * for (let value of word) {
 *   console.log(value);
 * }
 * </code>
 * </div>
 */

/**
 * @submodule JS Method
 */

/**
 * The parseInt() function parses a string argument and
 * returns an integer of the specified radix (the base in mathematical numeral systems).
 * @method parseInt
 *
 * @example
 * <div class='norender'>
 * <code>
 * parseInt('F', 16);
 * parseInt(21, 8);
 * </code>
 * </div>
 */

/**
 * The JSON.stringify() method converts a JavaScript object or value to a JSON string.
 * @method stringify
 * @for JSON
 * @param {Object} object :Javascript object that you would like to convert to JSON
 *
 * @example
 * <div class='norender'>
 * <code>
 * JSON.stringify('foo'); // '"foo"'
 * JSON.stringify([1, 'false', false]); //'[1,"false",false]'
 * JSON.stringify([NaN, null, Infinity]); //'[null,null,null]'
 * </code>
 * </div>
 */
