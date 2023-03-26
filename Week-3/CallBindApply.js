let userDetail={
    name:"Mahipal Singh",
    Age:27,
    Designation:"SalesManager",
}
//Call
let printDetails=function(city){
    console.log(this.name+" "+city);
}

//Apply
printDetails.call(userDetail, "Bhilwara");

printDetails.call(userDetail, "Bhilwara");

//Bind
let newfun=printDetails.bind(serDetail, "Bhilwara")
newfun();

