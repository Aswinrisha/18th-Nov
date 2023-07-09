//creating two jsons with same properties in different order
let obj1={name:"Person 1",age:5};
let obj2={age:5,name:"Person 2"};
//we can compare two jsons using their keys
//as an example I am comparing their ages to find out who is younger
if(obj1.age<obj2.age){
    console.log(obj1.name,"is younger")
}
else if(obj1.age==obj2.age){
    console.log(obj1.name,"and",obj2.name,"are of same age" )
}
else{
    console.log(obj2.name,"is younger")
}
