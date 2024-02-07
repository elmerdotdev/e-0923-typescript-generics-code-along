// Generics function
const echo = <T>(data: T) => {
  return data
}

echo("John")
echo(20)


function wrapInArray<T>(value: T): T[] {
  return [value] // ["Hello world"] [50]
}

wrapInArray("Hello world")
wrapInArray(50)


// Generics promise
const loadProfile: Promise<{ name: string, age: number }> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ // return an object with name and age properties
      name: "John",
      age: 30
    })
  }, 2000)
})

loadProfile.then(data => {
  console.log(data) // { name: 'John', age: 30 }
})


// Generics class
class PairHolder<K, V> {
  key: K;
  value: V;
  constructor(key: K, value: V) {
    this.key = key
    this.value = value
  }
  getPair(): [K, V] {
    return [this.key, this.value]
  }
}

const newPair = new PairHolder<string, number>("age", 30)
console.log(newPair.getPair()) // ["age", 30]


// Generics class with constraints
class Calculator<T extends number> {
  private value: T

  constructor(value: T) {
    this.value = value
  }

  add(inputValue: T): number {
    return this.value + inputValue
  }
}

const basicCalculator = new Calculator<number>(5)
console.log(basicCalculator.add(10)) // 15


// Generics function with more than one type
function wordJoiner<T extends string, U extends string>(firstWord: T, secondWord: U): string {
  return firstWord + secondWord
}

console.log(wordJoiner("Ban", "ana")) // Banana


// Generics constraint keyof
function getProperty<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key] // obj["name"] ===> "John"
}

console.log(getProperty({ name: "John", age: 20 }, "name"))


// Generics class
class ItemManager<T> {
  private items: T[] = []

  addItem(item: T): void {
    this.items.push(item)
  }

  removeItem(item: T): void {
    if (this.items.indexOf(item) === -1) {
      return
    }
    this.items.splice(this.items.indexOf(item), 1)
  }

  getItems(): T[] {
    return [...this.items]
  }
}

const store = new ItemManager<string>()
store.addItem("Toy")
store.addItem("Water bottle")
store.removeItem("Toy")
console.log(store.getItems()) // ["Water bottle"]


// Readonly
const readOnlyData: ReadonlyArray<string> = ["John", "Joe", "Billy"]
console.log(readOnlyData)
readOnlyData.push("Jack") // cannot push item because its readonly