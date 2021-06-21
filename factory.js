/**
 * Models
 */
function Developer(name) {
  this.name = name
  this.type = 'Developer'
}

function Tester(name) {
  this.name = name
  this.type = 'Tester'
}

/**
 * Factory
 */
function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name)
      case 2:
        return new Tester(name)
      // ... other types ...
    }
  }
}

function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create('Ahmed', 1)) // Developer
employees.push(employeeFactory.create('Mohamed', 2)) // Tester
employees.push(employeeFactory.create('Majid', 1)) // Developer
employees.push(employeeFactory.create('Gaber', 1)) // Developer
employees.push(employeeFactory.create('Marwan', 2)) // Tester

employees.forEach(employee => {
  say.call(employee)
})
