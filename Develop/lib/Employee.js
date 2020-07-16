// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getTitle() {
        return this.title;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;