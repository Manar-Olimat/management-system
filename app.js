

//emp constructor
function Employee(empId, fullName, department, level, imgUrl) {
    if (!new.target) {
        throw Error("Cannot be called without the new keyword");
    }

    this.empId = empId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgUrl=imgUrl
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



    this.info = function () {
        // return insertRow(this);
    }
}

//employees instances
const empArr =new Array();


// .............................................................................................................
// .............................................................................................................
const form=document.querySelector('form');
// const formData=new FormData(form);
// const val=new Array();
const id=form.elements['id']; 
const fullName=form.elements['fullName'];
const dept=form.elements['dept'];
const level=form.elements['level'];
const profileImg=form.elements['profileImg'];


// on submit push new object,,, store in local ,,, create new card
form.addEventListener('submit',function(e){
    e.preventDefault();
   console.log(id.value) ; 
   empArr.push(new Employee(id.value,fullName.value,dept.value,level.value,profileImg.value));
   empArr[empArr.length-1].info();
   window.localStorage.setItem('Employee',JSON.stringify(empArr));
   console.log(empArr) ; 
insertCard(empArr[empArr.length-1]);



});




function insertCard(employee){
    const br=document.createElement('br');
    document.querySelector('main').appendChild(br);
    //row
const row=document.createElement('div');
row.className='row';
document.querySelector('main').appendChild(row);

    //col
const col=document.createElement('div');
col.className='col-sm-6';
row.appendChild(col);

//outer card
const card=document.createElement('div');
card.className='card';
card.style.width='18rem';
col.appendChild(card);

// img
const img=document.createElement('img');
img.src=profileImg.value;
img.className='card-img-top';
card.appendChild(img);

// card body
const cardBody=document.createElement('div');
cardBody.className='card-body';
col.appendChild(cardBody);

//title
const cardTitle=document.createElement('h5');
cardTitle.className='card-title';
cardTitle.textContent='Employee Data';
cardBody.appendChild(cardTitle);

//text



const cardText=document.createElement('p');
cardText.className='card-text';
cardText.textContent='ID: '+employee.empId + '\nFull Name: '+ employee.fullName+ 
'\nDepartment: '+employee.department+ '\nLevel: '+employee.level + '\nSalary'+employee.salary;
cardBody.appendChild(cardText);
}

