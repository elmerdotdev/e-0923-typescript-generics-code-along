// Generics function
var echo = function (data) {
    return data;
};
echo("John");
echo(20);
function wrapInArray(value) {
    return [value]; // ["Hello world"] [50]
}
wrapInArray("Hello world");
wrapInArray(50);
// Generics promise
var loadProfile = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            name: "John",
            age: 30
        });
    }, 2000);
});
loadProfile.then(function (data) {
    console.log(data); // { name: 'John', age: 30 }
});
// Generics class
var PairHolder = /** @class */ (function () {
    function PairHolder(key, value) {
        this.key = key;
        this.value = value;
    }
    PairHolder.prototype.getPair = function () {
        return [this.key, this.value];
    };
    return PairHolder;
}());
var newPair = new PairHolder("age", 30);
console.log(newPair.getPair()); // ["age", 30]
// Generics class with constraints
var Calculator = /** @class */ (function () {
    function Calculator(value) {
        this.value = value;
    }
    Calculator.prototype.add = function (inputValue) {
        return this.value + inputValue;
    };
    return Calculator;
}());
var basicCalculator = new Calculator(5);
console.log(basicCalculator.add(10)); // 15
// Generics function with more than one type
function wordJoiner(firstWord, secondWord) {
    return firstWord + secondWord;
}
console.log(wordJoiner("Ban", "ana")); // Banana
// Generics constraint keyof
function getProperty(obj, key) {
    return obj[key]; // obj["name"] ===> "John"
}
console.log(getProperty({ name: "John", age: 20 }, "name"));
