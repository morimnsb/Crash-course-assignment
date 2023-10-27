const toDos = [
  {
    id:1,
    text:"join to stand up",
    isCompleted: true
  },
  {
    id:2,
    text:"do homework",
    isCompleted: true
  },
  {
    id:3,
    text:"join to master class",
    isCompleted: false
  }
]
for (let i = 0; i< toDos.length; i++){
  console.log(toDos[i].id);
}

for (let item of toDos){
  console.log(item.text);
}

toDos.forEach(function(item){
  console.log(item.id);
})


toDos.map(function(todo) {
  console.log(todo.text);
});


const todoCompleted = toDos.filter(function(item){
  return item.isCompleted === true;
}).map(function(item) {
  return item.text;
  });
console.log(todoCompleted);


const x = 10;
const color = x > 10 ? "red" : "blue";
console.log(color);

switch(color){
  case "red":
  console.log("color is red");  
  break;
  case "blue":
    console.log("color is blue");  
    break;
  default:
    console.log("color is blue"); 
    break;
}

function Person(firstName, lastName,dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function(){
    return this.dob.getFullYear();
  }
  this.getFullName =function(){
    return this.firstName + ' ' + this.lastName;
  }
}
// Instantiate object
const person1 = new Person("john","Doe", "4-3-1980");
const person2 = new Person("Mori","moradi","3-3-1984");

console.log(person2.dob);
console.log(person1.getBirthYear());
console.log(person2.getFullName());

Person.prototype.getUpperCaseName = function() {
  return this.firstName.toUpperCase();
}

console.log(person2.getUpperCaseName());

// class

class Person2{
  constructor(firstName, lastName,dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
  getBirthYear2(){
  return this.dob.getFullYear();
  }
  getFullName2(){
  return this.firstName + ' ' + this.lastName;
  }
}
const person3 = new Person2("john","Doe", "4-3-1980");
const person4 = new Person2("Mori","Moradi","3-3-1984");
console.log(person3.getBirthYear2());


 const myForm = document.querySelector("#my-form");
 const nameInput = document.querySelector("#name");

 const emailInput = document.querySelector("#email");
 const msg = document.querySelector(".msg");
 const userList = document.querySelector("#users");

 myForm.addEventListener("submit",onSubmit);

 function onSubmit(e){
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === ''){
      msg.classList.add('error');
      msg.innerHTML = "please enter fields"
      setTimeout(() => msg.remove(), 3000);
    }else{
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(nameInput.value + " " + emailInput.value));
      userList.appendChild(li);
      // clear fields
      nameInput.value =" ";
      emailInput.value =" ";
    }
  
 }
