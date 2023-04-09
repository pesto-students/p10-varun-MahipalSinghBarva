const obj={
    name:"Mahipal Singh",
    getName:function(){
        return this.name;
    },
    getRoll:function(){
        return this.roll;
    }
}
// console.log(obj)

const obj2={
    roll:1,
    __proto__:obj
}
// console.log(obj2.getName())

const obj3={
    class:"MCA",
    __proto__:obj2
}
// console.log(obj3.getRoll())

const array=["Mahipal"];
console.log(array)

const object=new Object();
console.log(object)

const array1=new Array();
console.log(array1)

Array.prototype.show=function(){
    return this;
}
const cities=["Bhilwara"];
console.log(cities.show());

Array.prototype.covertIntoObject=function(){
    let newObj={};
    this.forEach(elenment=>{
    })
    return newObj;
}
console.log(cities.covertIntoObject())


function MyPrototype(name){
    this.namr=name;
}

MyPrototype.prototype=obj;

const myproto=new MyPrototype("Raipur");
console.log(myproto.getName());
