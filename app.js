/**
 *
 * 
 * You will create a function for calculating the 
salary using the provided table by generating 
a random number between the minimum and 
maximum salary for each level, 
use the below table to calculate the salary depends on the employee level.


 */


function Employee(empId, fullName, department, level, imgUrl) {
    if (!new.target) {
        throw Error("Cannot be called without the new keyword");
    }

    this.empId = empId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = calcSalary();

    function calcSalary() {
        let sal;
        switch (level) {
            //Math.random() * (max - min) + min
            case 'Junior':
                sal = Math.floor(Math.random() * (1000 - 500) + 500);

                break;
            case 'Mid-Senior':
                sal = Math.floor(Math.random() * (1500 - 1000) + 1000);
                break;
            case 'Senior':
                sal = Math.floor(Math.random() * (2000 - 1500) + 1500);
                break;


        }
        return sal;
    }

    this.printInfo = function () {
        console.log('Employee name: ' + this.fullName + '\t\tSalary: ' + this.salary);
    }
}

//employees instances
const emp1 = new Employee(1000, 'Ghazi Samer', 'Adminstration', 'Senior');
const emp2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior');
const emp3 = new Employee(1002, 'Tamara Ayoub', 'Markiting', 'Senior');
const emp4 = new Employee(1003, 'Safi Walid', 'Adminstration', 'Mid-Senior');
const emp5 = new Employee(1004, 'Omar Zaid', 'Development', 'Senior');
const emp6 = new Employee(1005, 'Rana Saleh', 'Development', 'Junior');
const emp7 = new Employee(1006, 'Hadi Ahamd', 'Finance', 'Mid-Senior');

emp1.printInfo();
emp2.printInfo();
emp3.printInfo();
emp4.printInfo();
emp5.printInfo();
emp6.printInfo();
emp7.printInfo();

console.log(Math.floor(Math.random() * (100 - 50) + 50))
