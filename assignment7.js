// Destructing colors
const colors=['red','green','blue']

const[a,b,c]=colors

console.log(a)
console.log(b)
console.log(c) 

//Destructing  properties 

const person={name:'Alice',age:25,city:'Wonderland'}
const{name,age,city}=person;
console.log(name)
console.log(age)
console.log(city)
 

//Destructing examples

const settings={theme:'dark',language:'en'};
const{theme,language,mode='light'}=settings;
console.log(theme)
console.log(language)
console.log(mode)