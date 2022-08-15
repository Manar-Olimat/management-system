


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

    function insertRow(obj) {
        //create row and insert data to it
        let row = document.createElement('tr');
        let cell;
        for (const key in obj) {
            if (key == Object.keys(obj)[5]) {
                break;
            }
            cell = document.createElement('td');
            cell.textContent = obj[key];
            cell.style.border='1px solid black';
            row.appendChild(cell);
        }
        return row;
    }

    this.info = function () {
        // console.log('Employee name: ' + this.fullName + '\t\tSalary: ' + this.salary);
        return insertRow(this);
    }
}

//employees instances
const empArr = [new Employee(1000, 'Ghazi Samer', 'Adminstration', 'Senior'),
new Employee(1001, 'Lana Ali', 'Finance', 'Senior'),
new Employee(1002, 'Tamara Ayoub', 'Markiting', 'Senior'),
new Employee(1003, 'Safi Walid', 'Adminstration', 'Mid-Senior'),
new Employee(1004, 'Omar Zaid', 'Development', 'Senior'),
new Employee(1005, 'Rana Saleh', 'Development', 'Junior'),
new Employee(1006, 'Hadi Ahamd', 'Finance', 'Mid-Senior')];




//create table

let table = document.createElement('table');
table.style.border = '2px solid blueviolet';
table.style.width='700px'
table.style.textAlign='center';
table.style.position='relative';
table.style.left='350px';
table.style.top='150px';
document.body.querySelector('main').appendChild(table);

// create and insert table head
let tHead = document.createElement('thead');
let th;
for (const key in empArr[0]) {
    if (key == Object.keys(empArr[0])[5]) {
        break;

    }
th=document.createElement('th');
th.textContent=key;
th.style.border='1px solid black';
th.style.font='20px bold Arial, sans-serif'
tHead.appendChild(th);
}
table.appendChild(tHead);

// create and insert table rows
let row;
for (const e of empArr) {
    row= e.info();
       table.appendChild(row);
}



