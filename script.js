// var request = new XMLHttpRequest()
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send()
// request.onload=function(){
//    var data = request.response;
//    var result = JSON.parse(data);
//  for (obj of result){
//    ////      printing Flags Code
//      console.log(obj.flags.png)

//     //    printting countires name regions sub regions 
//     //console.log("Countries :"+ obj.continents+",","Region :"+obj.region+",","SubRegion:"+ obj.subregion+",","Population :"+obj.population);
 
// }
 
// }


///compare 2 json have same properties without order
let obj1 = {name:"Person1",age:5};
let obj2 ={age:5,name:"Person1"};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));