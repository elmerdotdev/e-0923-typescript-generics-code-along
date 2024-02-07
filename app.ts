// Generics function
const echo = <T>(data: T) => {
  return data
}

echo("John")
echo(30)
echo(true)


// Built-in generics array
const results: Array<string> = ["Perfect", "Not perfect"]
results.push("Somewhat perfect")


// Built-in generics promise
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 2000)
})

promise.then(data => {
  data.toFixed(2) // 0.00
})


// Generics function
const echo1 = <T>(data: T) => {
  return data
}

echo("Joe") // infer the type
echo(<number>3) // explicitly mention the type


// Generics class
class SimpleMath<T, U> {
  baseValue: T; // string
  multiplyValue: U; // number
  calculate(): number {
    return +this.baseValue * +this.multiplyValue
  }
}

const simpleMath = new SimpleMath<string, number>()
simpleMath.baseValue = "30"
simpleMath.multiplyValue = 50
console.log(simpleMath.calculate())


// Generics class with constraints
class SimpleMath2<T extends string | number, U extends string | number> {
  baseValue: T; // string or number
  multiplyValue: U; // string or number
  calculate(): number {
    return +this.baseValue * +this.multiplyValue
  }
}

const simpleMath2 = new SimpleMath2<string, number>()
simpleMath2.baseValue = "10"
simpleMath2.multiplyValue = 30
console.log(simpleMath2.calculate())


// Generics function with more than one type
const echo2 = <T, U, V>(data: T, data2: U, data3: V) => {
  return [data, data2, data3]
}

echo2("John", 30, ['drawing', 'skydiving', 'crocodile-hunting']) // string, number, string[]


// keyof constraint
interface Employee {
  name: string
  age: number,
  salary: number
}

const emp1: Employee = {
  name: 'John',
  age: 30,
  salary: 20000
}

const emp2: Employee = {
  name: 'Joe',
  age: 20,
  salary: 30000
}

const extractEmployeeData = <T extends Employee, U extends keyof T>(obj: T, key: U) => {
  return obj[key] // obj["salary"] --> 20000
}

extractEmployeeData(emp1, "salary") // T, U ===> 20000
extractEmployeeData(emp2, "age") // T, U ===> 20


// Generics class with Generics type
class DataStorage<T extends string | number | boolean> {
  private data: T[] = []
  
  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      // this item does not exist in array
      return
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textBasedServer = new DataStorage<string>() // can only accept string data
textBasedServer.addItem(2) // not a string
textBasedServer.addItem('Word') // is a string
console.log(textBasedServer.getItems()) // output all the strings in an array

const numberBasedServer = new DataStorage<number>() // can only store numbers
numberBasedServer.addItem(10) // is a number
numberBasedServer.addItem(20) // is a number
numberBasedServer.addItem('30') // '30' is not a number
numberBasedServer.addItem(true) // true is not a number


// Partial utility type
interface CourseGoal {
  title: string,
  description: string,
  completeUntil: Date
}

const createCourseGoal = (title: string, description: string, date: Date): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {} // this makes all fields in interface CourseGoal optional
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal
}

createCourseGoal("React", "React Course", new Date())


// Readonly utility type
const names: Readonly<string[]> = ["John", "Joe"]
names.push("Mary") // not allowed
names.pop() // not allowed