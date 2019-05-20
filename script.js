/*First step:
Create an array of objects out of this table.
E.g      const nameOfWorkers = [
{ firstName:'Vanessa',
secondName: 'Rogers',
gender: 'Female',
age: 19,
salary: 60193}
]



Questions
Use for loop to iterate over the array of objects
//Print to the console the firstname and lastname of the all workers
Print to the console the total salaries of all workers
Print to the console the average age of all workers


Print to the console the personal info of the worker at index 33
Print to the console the salary of Sofia Turner
Print to the console the length of the array

We just found out that some data were answered incorrectly and you want to edit.
Note: You are not to edit it from the details from the nameOfWorkers directly. You are to use something like
nameOfWorkers.name = ‘New name’

Miller Murphy was spelt incorrectly. You are to edit it to Milner Murphy and print to the console the updated array of objects.
Aldus Adams’s gender is female. You are to edit it to Female and print to the console the updated array of objects.*/

/*SOLUTION*/
//Create an array of objects out of this table.
const nameOfWorkers = [
{
    firstName : 'Vanessa',
    lastName : 'Rogers',
    gender : 'female',
    age : 19,
    salary : 60193
},


{
    firstName : 'Charlotte',
    lastName : 'Hunt',
    gender : 'Female',
    age : 24,
    salary : 92383
},


{
    firstName : 'Marcus',
    lastName : 'Foster',
    gender : 'Male',
    age : 21,
    salary : 65760
},



{
    firstName : 'Myra',
    lastName : 'Brooks',
    gender : 'female',
    age : 22,
    salary : 174036
},




{
    firstName : 'caroline',
    lastName : 'Armstrong',
    gender : 'female',
    age : 29,
    salary : 149879
},


{
    firstName : 'Belinda',
    lastName : 'Carroll',
    gender : 'female',
    age : 19,
    salary : 188935
},



{
    firstName : 'Olivia',
    lastName : 'Amstrong',
    gender : 'female',
    age : 26,
    salary : 34782
},


{
    firstName : 'April',
    lastName : 'Cooper',
    gender : 'female',
    age : 20,
    salary : 68263
},



{
    firstName : 'Edith',
    lastName : 'Harison',
    gender : 'Female',
    age : 23,
    salary : 54709
},


{
    firstName : 'Vivian',
    lastName : 'Hederson',
    gender : 'Female',
    age : 20,
    salary : 155709
},

{
    firstName : 'Ashton',
    lastName : 'Martin',
    gender : 'male',
    age : 27,
    salary : 166647
},

{
    firstName : 'Gianna',
    lastName : 'Moore',
    gender : 'Female',
    age : 23,
    salary : 191619
},

{
    firstName : 'Camila',
    lastName : 'Allen',
    gender : 'Female',
    age : 23,
    salary : 85567
},

{
    firstName : 'Gianna',
    lastName : 'Morrison',
    gender : 'female',
    age : 28,
    salary : 191509
},

{
    firstName : 'Paul',
    lastName : 'Cooper',
    gender : 'male',
    age : 18,
    salary : 39471
},

{
    firstName : 'Tara',
    lastName : 'Mason',
    gender : 'female',
    age : 19,
    salary : 189780
},

{
    firstName : 'Aida',
    lastName : 'Tucker',
    gender : 'female',
    age : 21,
    salary : 143187
},

{
    firstName : 'Richard',
    lastName : 'Cameron',
    gender : 'Male',
    age : 21,
    salary : 116644
},


{
    firstName : 'Amy',
    lastName : 'Stwart',
    gender : 'Female',
    age : 29,
    salary : 126961
},


{
    firstName : 'Eleanor',
    lastName : 'Thompson',
    gender : 'Female',
    age : 22,
    salary : 159003
},



{
    firstName : 'Alberta',
    lastName : 'Edwards',
    gender : 'Female',
    age : 21,
    salary : 105648
},




{
    firstName : 'Gianna',
    lastName : 'Evans',
    gender : 'Female',
    age : 27,
    salary : 183805
},


{
    firstName : 'Florrie',
    lastName : 'Kelly',
    gender : 'Female',
    age : 24,
    salary : 180568
},



{
    firstName : 'Miranda',
    lastName : 'Harris',
    gender : 'Female',
    age : 19,
    salary : 185753
},


{
    firstName : 'Henry',
    lastName : 'Davis',
    gender : 'Male',
    age : 18,
    salary : 83804
},



{
    firstName : 'Kirsten',
    lastName : 'Barnes',
    gender : 'Female',
    age : 26,
    salary : 161833
},


{
    firstName : 'Jack',
    lastName : 'Charpman',
    gender : 'Male',
    age : 19,
    salary : 41007
},

{
    firstName : 'Mary',
    lastName : 'Kelly',
    gender : 'Female',
    age : 27,
    salary : 118346
},

{
    firstName : 'Emma',
    lastName : 'Evans',
    gender : 'Female',
    age : 23,
    salary : 126125
},

{
    firstName : 'Blake',
    lastName : 'Evans',
    gender : 'Male',
    age : 24,
    salary : 69702
},

{
    firstName : 'Aldus',
    lastName : 'Amstrong',
    gender : 'Male',
    age : 26,
    salary : 132491
},

{
    firstName : 'Adeliade',
    lastName : 'Martin',
    gender : 'Female',
    age : 20,
    salary : 175263
},

{
    firstName : 'Victoria',
    lastName : 'Eliot',
    gender : 'Female',
    age : 21,
    salary : 111645
},

{
    firstName : 'Nicole',
    lastName : 'Harrison',
    gender : 'Female',
    age : 22,
    salary : 54624
},

{
    firstName : 'Edwin',
    lastName : 'Hamilton',
    gender : 'Male',
    age : 18,
    salary : 152586
},


{
    firstName : 'Jessica',
    lastName : 'Ribinson',
    gender : 'Female',
    age : 29,
    salary : 85446
},


{
    firstName : 'Sofia',
    lastName : 'Turner',
    gender : 'Female',
    age : 20,
    salary : 131564
},



{
    firstName : 'Cadie',
    lastName : 'Higgins',
    gender : 'Female',
    age : 21,
    salary : 138663
},




{
    firstName : 'Jessica',
    lastName : 'Turner',
    gender : 'Female',
    age : 24,
    salary : 91319
},


{
    firstName : 'Walter',
    lastName : 'Hamilton',
    gender : 'Male',
    age : 25,
    salary : 117408
},



{
    firstName : 'Alexander',
    lastName : 'Farrell',
    gender : 'Male',
    age : 26,
    salary : 65878
},


{
    firstName : 'Justin',
    lastName : 'Howard',
    gender : 'Male',
    age : 21,
    salary : 165575
},



{
    firstName : 'Chelsea',
    lastName : 'Holmes',
    gender : 'Female',
    age : 21,
    salary : 32690
},


{
    firstName : 'Alberta',
    lastName : 'Wilson',
    gender : 'Female',
    age : 22,
    salary : 143459
},

{
    firstName : 'Miller',
    lastName : 'Murphy',
    gender : 'Male',
    age : 25,
    salary : 163776
},

{
    firstName : 'Adrinna',
    lastName : 'Hawkins',
    gender : 'Female',
    age : 29,
    salary : 64412
},

{
    firstName : 'Dominik',
    lastName : 'Reed',
    gender : 'Male',
    age : 23,
    salary : 42643
},

{
    firstName : 'Gianna',
    lastName : 'Craig',
    gender : 'Female',
    age : 18,
    salary : 141944
},

{
    firstName : 'Alissa',
    lastName : 'Cameron',
    gender : 'Female',
    age : 25,
    salary : 101581
},

{
    firstName : 'Aldus',
    lastName : 'Adams',
    gender : 'Female',
    age : 25,
    salary : 132894
}
]

//Print to the console the firstname and lastname of the all workers
console.log("FIRSTNAMES AND LASTNAMES OF ALL THE WORKERS");
var allFirstNames = nameOfWorkers.map((x)=>x.firstName);
var allLastNames = nameOfWorkers.map((i)=>i.lastName);

 for(i = 0; i< nameOfWorkers.length; i++){
     console.log(allFirstNames[i] +" "+ allLastNames[i]);
 }
/* console.log("FIRSTNAMES OF ALL WORKERS");
var allFirstNames = nameOfWorkers.map((x)=>x.firstName);
  for(i = 0; i < allFirstNames.length; i++){
      console.log(allFirstNames[i]);
  }

console.log("LASTNAMES OF ALL WORKERS");
var allLastNames = nameOfWorkers.map((x)=>x.lastName);
  for (i = 0 ; i < allLastNames.length; i++){
      console.log(allLastNames[i]);
  }
 */
  //TOTAL SALARIES OF ALL THE WORKERS
console.log("TOTAL SALARY OF ALL WORKERS");
var totalSalaries = nameOfWorkers.map((x)=>x.salary );
   for(i = 0; i < totalSalaries.length; i++){
      console.log(totalSalaries[i]);
}

// THE AVERAGE AGE OF ALL WORKERS
console.log("AVERAGE AGE OF ALL THE WORKERS");
var ages = nameOfWorkers.map((x)=> x.age / 2);
   for (i = 0 ; i < ages.length; i++){
      console.log(ages[i]);
}

//PERSONAL INFO AT INDEX 33
  console.log("PERSONAL INFO OF WORKER AT INDEX 33");
  console.log(nameOfWorkers[33]);

//SALARY OF SOFIA TURNER
  console.log("SALARY OF SOFIA TURNER");
var sofiaSalary = nameOfWorkers[36].salary;
  console.log(sofiaSalary);

//LENGTH OF THE ARRAY
  console.log("LENGTH OF THE ARRAY");
  console.log(nameOfWorkers.length);

//UPDATING MILLER MURPHY TO MILNER MURPHY
var milnerInfo = nameOfWorkers[44].firstName = "Milner";
  console.log("MILLER HAS JUST BEEN UPDATED TO MILNER");
  console.log(milnerInfo);

  console.log("********************");
  console.log("UPDATED OBJECT - FIRSTNAME");
  console.log(nameOfWorkers[44]);
  console.log("*********************");

//UPDATING ALDUS ADAM'S GENDER FROM MALE TO FEMALE
var aldusInfo = nameOfWorkers[49].gender = "FEMALE";
  console.log("ALDUS ADAM'S GENDER HAS JUST BEEN UPDATED");
  console.log(aldusInfo);

  console.log("********************");
  console.log("UPDATED OBJECT - GENDER");
  console.log(nameOfWorkers[49]);
  console.log("*********************");
