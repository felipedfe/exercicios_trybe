class Employee {
  private static employeeCount = 0

  constructor(public name: string) {
    Employee.addEmployee();
  }

  private static addEmployee() {
    this.employeeCount += 1;
  }

  static get employees() {
    return this.employeeCount;
  }
}

// Observe que o this no contexto de um método estático se refere à classe, não ao objeto.

console.log(Employee.employees);
// const e1 = new Employee('Ronald');
// console.log(Employee.employees);
// const e2 = new Employee('Cíntia');
// console.log(Employee.employees);
