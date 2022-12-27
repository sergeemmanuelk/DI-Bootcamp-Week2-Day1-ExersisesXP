/**
 * Exercise 1: Your Favorite Food
    Instructions
    Store your favorite food into a variable.

    Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

    Console.log I eat <favorite food> at every <favorite meal>
*/

let favoriteFood = "alloco"
let favoriteMeal = "lunch"

console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`)


/**
 * Exercise 2 : Series
    Instructions
    Part I
    Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

    Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

    Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
    For example : black mirror, money heist, and the big bang theory

    Console.log a sentence using both of the variables created above
    For example : I watched 3 series : black mirror, money heist, and the big bang theory


    Part II
    Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
    Add, at the end of the array, the name of another series you watched.
    Add, at the beginning of the array, the name of your favorite series.
    Delete the series “black mirror”.
    Console.log the third letter of the series “money heist”.
    Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
 */

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]
myWatchedSeriesLength = myWatchedSeries.length
myWatchedSeriesSentence = "black mirror, money heist, and the big bang theory"
console.log(`I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`)
myWatchedSeries[2] = "friends"
myWatchedSeries.push("suits")
myWatchedSeries.unshift("game of throne")
myWatchedSeries.splice(1, 1)
console.log(myWatchedSeries[1].substring(2,3))
console.log(myWatchedSeries)

/**
 * Exercise 3 : The Temperature Converter
    Instructions
    Store a celsius temperature into a variable.

    Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
    Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
    Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
 */

let temperatureInCelsius = 30 // temperature is 30 degrees Celsius
let temperatureInFahrenheit = temperatureInCelsius * 9/5 + 32
console.log(`${temperatureInCelsius}°C is ${temperatureInFahrenheit}°F`)

/**
 * Exercise 4 : Guess The Answers #1
    Instructions
    For each expression, predict what you think the output will be in a comment (//) without first running the command.
    Of course, explain each prediction.
    Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
 */


let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: It will display 55, because 34 and 21 are numbers and their sum gives 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: It will display 23, because the new value of a is now 2 and 2 and 21 are numbers and their sum gives 23
// Actual: 23

//The value of c is undefined

console.log(3 + 4 + '5')

//The result will display 75 

/**
 * Exercise 5 : Guess The Answers #2
    Instructions
    For each expression, predict what you think the output will be in a comment (//) without first running the command.
    Of course, explain each prediction.
    Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
 */

typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: number
// Actual: number

typeof("hello")
// Prediction: String
// Actual: String

typeof(true)
// Prediction: Boolean
// Actual: Boolean

typeof(1 != 2)
// Prediction: Boolean
// Actual: Boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: '13'

"1" - "3"
// Prediction: -2
// Actual: '-2'

"johnny" + 5
// Prediction: NaN
// Actual: 'johnny5'

"johnny" - 5
// Prediction:
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false

/**
 * Exercise 6 : Guess The Answers #3
    Instructions
    For each expression, predict what you think the output will be in a comment (//) without first running the command.
    Of course, explain each prediction.
    Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
 */

5 + "34"
// Prediction: '534'
// Actual: '534'

5 - "4"
// Prediction: '-1'
// Actual: -1

10 % 5 //This operation gives the remainder of the division
// Prediction: 0
// Actual: 0

5 % 10 //This operation gives the remainder of the division
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction: 'JavaScript'
// Actual: 'JavaScript'

" " + " "
// Prediction: '  '
// Actual: '  '

" " + 0
// Prediction: ' 0'
// Actual: ' 0'

true + true //true = 1 and true = 1
// Prediction: 2
// Actual: 2

true + false //false = 0 and true = 1
// Prediction: 1
// Actual: 1

false + true //false = 0 and true = 1
// Prediction: 1
// Actual: 1

false - true //false = 0 and true = 1
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4 // 3 and 4 are a number
// Prediction: -1
// Actual: -1

"Bob" - "bill" //Bob and bill are string and we cannot subtract the string
// Prediction: NaN
// Actual: NaN
    