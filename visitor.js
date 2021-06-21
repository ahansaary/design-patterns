/**
 * Receiving object
 */
function Employee(name, salary) {
  this.name = name
  this.salary = salary
}

Employee.prototype = {
  getSalary: function () {
    return this.salary
  },

  setSalary: function (salary) {
    this.salary = salary
  },

  accept: function (visitorFunction) {
    visitorFunction(this)
  }
}

// // ============================

const ansary = new Employee('Ahmed', 1000)
console.log(ansary.getSalary())

// Visitor function
function ExtraSalary(employee) {
  employee.setSalary(employee.getSalary() * 2)
}

ansary.accept(ExtraSalary)
console.log(ansary.getSalary())
